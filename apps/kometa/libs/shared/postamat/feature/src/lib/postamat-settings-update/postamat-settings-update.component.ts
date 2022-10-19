import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostamatSettingsFragment } from '@kometa/shared/postamat/types';
import { UpdatePostamatSettingsFormModel } from '@kometa/shared/postamat/ui';
import { BehaviorSubject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { TypedFormBuilder, TypedFormGroup } from '@kometa/shared/typed-form';
import { ToastrService } from 'ngx-toastr';
import {
  GetPostamatSettingsGQL,
  UpdatePostamatSettingsGQL,
} from '@kometa/shared/postamat/data-access';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { finalize, tap } from 'rxjs/operators';
import { Validators } from '@angular/forms';

@UntilDestroy()
@Component({
  selector: 'kometa-postamat-settings-update',
  templateUrl: './postamat-settings-update.component.html',
  styleUrls: ['./postamat-settings-update.component.scss'],
})
export class PostamatSettingsUpdateComponent implements OnInit {
  settings?: PostamatSettingsFragment;
  formGroup?: TypedFormGroup<UpdatePostamatSettingsFormModel>;
  readonly loading$ = new BehaviorSubject<boolean>(false);

  @Input()
  postamatId!: string;

  @Output()
  readonly saved = new EventEmitter<PostamatSettingsFragment>();

  @Output()
  readonly cancel = new EventEmitter();

  constructor(
    private readonly getPostamatSettingsGQL: GetPostamatSettingsGQL,
    private readonly updatePostamatSettingsGQL: UpdatePostamatSettingsGQL,
    private readonly fb: TypedFormBuilder,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.getPostamatSettingsGQL
      .watch(
        { postamatId: this.postamatId },
        {
          useInitialLoading: true,
        }
      )
      .valueChanges.pipe(
        tap(({ data, loading }) => {
          this.loading$.next(loading);
          if (data?.postamatById.settings) {
            this.settings = data.postamatById.settings;
            const { isAutoUpdate, adminPhone, receptionWaitingListOnly } = this.settings;
            this.formGroup = this.fb.group<UpdatePostamatSettingsFormModel>({
              isAutoUpdate: this.fb.control(isAutoUpdate, [Validators.required]),
              receptionWaitingListOnly: this.fb.control(receptionWaitingListOnly, [
                Validators.required,
              ]),
              adminPhone: this.fb.control(adminPhone),
            });
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  async onSave(input: UpdatePostamatSettingsFormModel): Promise<void> {
    await this.spinner.show();
    this.updatePostamatSettingsGQL
      .mutate({ input: { ...input, id: this.postamatId } })
      .pipe(
        tap(({ data }) => {
          const result = data?.updatePostamatSettings?.postamat?.settings;
          const errors = data?.updatePostamatSettings?.errors;

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
    this.formGroup?.reset(this.settings);
    this.cancel.emit();
  }
}
