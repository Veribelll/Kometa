import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostamatScannerFragment } from '@kometa/shared/postamat/types';
import { UpdatePostamatScannerFormModel } from '@kometa/shared/postamat/ui';
import { TypedFormBuilder, TypedFormGroup } from '@kometa/shared/typed-form';
import { BehaviorSubject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  GetPostamatScannerGQL,
  UpdatePostamatScannerGQL,
} from '@kometa/shared/postamat/data-access';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastrService } from 'ngx-toastr';
import { finalize, tap } from 'rxjs/operators';
import { Validators } from '@angular/forms';

@UntilDestroy()
@Component({
  selector: 'kometa-postamat-scanner-update',
  templateUrl: './postamat-scanner-update.component.html',
  styleUrls: ['./postamat-scanner-update.component.scss'],
})
export class PostamatScannerUpdateComponent implements OnInit {
  scanner?: PostamatScannerFragment;
  formGroup?: TypedFormGroup<UpdatePostamatScannerFormModel>;
  readonly loading$ = new BehaviorSubject<boolean>(false);

  @Input()
  postamatId!: string;

  @Output()
  readonly saved = new EventEmitter<PostamatScannerFragment>();

  @Output()
  readonly cancel = new EventEmitter();

  constructor(
    private readonly getPostamatScannerGQL: GetPostamatScannerGQL,
    private readonly updatePostamatScannerGQL: UpdatePostamatScannerGQL,
    private readonly fb: TypedFormBuilder,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.getPostamatScannerGQL
      .watch(
        { postamatId: this.postamatId },
        {
          useInitialLoading: true,
        }
      )
      .valueChanges.pipe(
        tap(({ data, loading }) => {
          this.loading$.next(loading);
          if (data?.postamatById.scanner) {
            this.scanner = data.postamatById.scanner;
            const { baudRate, dataBits, parity, stopBits, portName } = this.scanner;
            this.formGroup = this.fb.group<UpdatePostamatScannerFormModel>({
              baudRate: this.fb.control(baudRate, [Validators.required, Validators.min(1)]),
              dataBits: this.fb.control(dataBits, [Validators.required, Validators.min(1)]),
              parity: this.fb.control(parity, [Validators.required]),
              stopBits: this.fb.control(stopBits, [Validators.required]),
              portName: this.fb.control(portName, [Validators.required]),
            });
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  async onSave(input: UpdatePostamatScannerFormModel): Promise<void> {
    await this.spinner.show();
    this.updatePostamatScannerGQL
      .mutate({ input: { ...input, id: this.postamatId } })
      .pipe(
        tap(({ data }) => {
          const result = data?.updatePostamatScanner?.postamat?.scanner;
          const errors = data?.updatePostamatScanner?.errors;

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
    this.formGroup?.reset(this.scanner);
    this.cancel.emit();
  }
}
