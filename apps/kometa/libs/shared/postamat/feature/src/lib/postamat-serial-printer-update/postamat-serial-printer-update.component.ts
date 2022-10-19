import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TypedFormBuilder, TypedFormGroup } from '@kometa/shared/typed-form';
import { ToastrService } from 'ngx-toastr';
import { finalize, tap } from 'rxjs/operators';
import { PostamatSerialPrinterFragment } from '@kometa/shared/postamat/types';
import { Validators } from '@angular/forms';
import { UpdatePostamatSerialPrinterFormModel } from '@kometa/shared/postamat/ui';
import {
  GetPostamatSerialPrinterGQL,
  UpdatePostamatSerialPrinterGQL,
} from '@kometa/shared/postamat/data-access';

@UntilDestroy()
@Component({
  selector: 'kometa-postamat-serial-printer-update',
  templateUrl: './postamat-serial-printer-update.component.html',
  styleUrls: ['./postamat-serial-printer-update.component.scss'],
})
export class PostamatSerialPrinterUpdateComponent implements OnInit {
  printer?: PostamatSerialPrinterFragment;
  formGroup?: TypedFormGroup<UpdatePostamatSerialPrinterFormModel>;
  readonly loading$ = new BehaviorSubject<boolean>(false);

  @Input()
  postamatId!: string;

  @Output()
  readonly saved = new EventEmitter<PostamatSerialPrinterFragment>();

  @Output()
  readonly cancel = new EventEmitter();

  constructor(
    private readonly getPostamatSerialPrinterGQL: GetPostamatSerialPrinterGQL,
    private readonly updatePostamatSerialPrinterGQL: UpdatePostamatSerialPrinterGQL,
    private readonly fb: TypedFormBuilder,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.getPostamatSerialPrinterGQL
      .watch(
        { postamatId: this.postamatId },
        {
          useInitialLoading: true,
        }
      )
      .valueChanges.pipe(
        tap(({ data, loading }) => {
          this.loading$.next(loading);
          if (data?.postamatById.serialPrinter) {
            this.printer = data.postamatById.serialPrinter;
            const { settings, isEnabled } = this.printer;
            this.formGroup = this.fb.group<UpdatePostamatSerialPrinterFormModel>({
              baudRate: this.fb.control(settings.baudRate, [
                Validators.required,
                Validators.min(1),
              ]),
              dataBits: this.fb.control(settings.dataBits, [
                Validators.required,
                Validators.min(1),
              ]),
              parity: this.fb.control(settings.parity, [Validators.required]),
              stopBits: this.fb.control(settings.stopBits, [Validators.required]),
              portName: this.fb.control(settings.portName, [Validators.required]),
              isEnabled: this.fb.control(isEnabled, [Validators.required]),
            });
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  async onSave(input: UpdatePostamatSerialPrinterFormModel): Promise<void> {
    await this.spinner.show();
    this.updatePostamatSerialPrinterGQL
      .mutate({ input: { ...input, postamatId: this.postamatId } })
      .pipe(
        tap(({ data }) => {
          const result = data?.updatePostamatSerialPrinter?.postamat?.serialPrinter;
          const errors = data?.updatePostamatSerialPrinter?.errors;

          if (result) {
            this.saved.emit(result);
          }

          if (errors) {
            for (const { message } of errors) {
              this.toastrService.error(message);
            }
          }
        }),
        untilDestroyed(this),
        finalize(() => this.spinner.hide())
      )
      .subscribe();
  }

  onCancel(): void {
    if (this.printer) {
      const { settings, isEnabled } = this.printer;
      this.formGroup?.reset({
        ...settings,
        isEnabled,
      });
    }
    this.cancel.emit();
  }
}
