import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TypedFormBuilder, TypedFormGroup } from '@kometa/shared/typed-form';
import { BehaviorSubject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { finalize, tap } from 'rxjs/operators';
import { PostamatFilePrinterFragment } from '@kometa/shared/postamat/types';
import { UpdatePostamatFilePrinterFormModel } from '@kometa/shared/postamat/ui';
import {
  GetPostamatFilePrinterGQL,
  UpdatePostamatFilePrinterGQL,
} from '@kometa/shared/postamat/data-access';
import { Validators } from '@angular/forms';

@UntilDestroy()
@Component({
  selector: 'kometa-postamat-file-printer-update',
  templateUrl: './postamat-file-printer-update.component.html',
  styleUrls: ['./postamat-file-printer-update.component.scss'],
})
export class PostamatFilePrinterUpdateComponent implements OnInit {
  formGroup?: TypedFormGroup<UpdatePostamatFilePrinterFormModel>;
  readonly loading$ = new BehaviorSubject<boolean>(false);

  @Input()
  postamatId!: string;

  @Output()
  readonly saved = new EventEmitter<PostamatFilePrinterFragment>();

  @Output()
  readonly cancel = new EventEmitter();

  constructor(
    private readonly getPostamatFilePrinterGQL: GetPostamatFilePrinterGQL,
    private readonly updatePostamatFilePrinterGQL: UpdatePostamatFilePrinterGQL,
    private readonly fb: TypedFormBuilder,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.getPostamatFilePrinterGQL
      .watch(
        { postamatId: this.postamatId },
        {
          useInitialLoading: true,
        }
      )
      .valueChanges.pipe(
        tap(({ data, loading }) => {
          this.loading$.next(loading);
          if (data?.postamatById.filePrinter) {
            const { filePath, isEnabled } = data.postamatById.filePrinter;
            this.formGroup = this.fb.group<UpdatePostamatFilePrinterFormModel>({
              filePath: this.fb.control(filePath, [Validators.required]),
              isEnabled: this.fb.control(isEnabled, [Validators.required]),
            });
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  async onSave(input: UpdatePostamatFilePrinterFormModel): Promise<void> {
    await this.spinner.show();
    this.updatePostamatFilePrinterGQL
      .mutate({ input: { ...input, postamatId: this.postamatId } })
      .pipe(
        tap(({ data }) => {
          const result = data?.updatePostamatFilePrinter?.postamat?.filePrinter;
          const errors = data?.updatePostamatFilePrinter?.errors;

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
    this.cancel.emit();
  }
}
