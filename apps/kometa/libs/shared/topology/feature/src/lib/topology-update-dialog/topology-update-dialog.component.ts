import { Component } from '@angular/core';
import { TypedFormBuilder, TypedFormGroup } from '@kometa/shared/typed-form';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BehaviorSubject, tap } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { GetCellsDocument } from '@kometa/shared/postamat/cell/types';
import { UpdateTopologyFormModel } from '@kometa/shared/topology/ui';
import {
  GetDataForUpdateTopologyGQL,
  UpdateTopologyGQL,
} from '@kometa/shared/topology/data-access';

@UntilDestroy()
@Component({
  selector: 'kometa-topology-update-dialog',
  templateUrl: './topology-update-dialog.component.html',
  styleUrls: ['./topology-update-dialog.component.scss'],
})
export class TopologyUpdateDialogComponent {
  readonly formGroup: TypedFormGroup<UpdateTopologyFormModel>;
  readonly templatesPostamat$ = new BehaviorSubject<{ id: string; name: string }[]>([]);
  readonly postamatId: string;

  constructor(
    private readonly updateTopologyGQL: UpdateTopologyGQL,
    private readonly getDataForUpdateTopologyGQL: GetDataForUpdateTopologyGQL,
    private readonly fb: TypedFormBuilder,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { postamatId } = this.config.data;

    this.postamatId = postamatId;
    this.formGroup = this.fb.group<UpdateTopologyFormModel>({
      prefixName: this.fb.control(null),
      prefixBarcode: this.fb.control(null),
      templatePostamatId: this.fb.control(null),
    });

    this.getDataForUpdateTopologyGQL
      .watch({}, { useInitialLoading: false })
      .valueChanges.pipe(
        tap(({ data }) => {
          this.templatesPostamat$.next(data.templatesPostamat?.items ?? []);
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  async onSave(input: UpdateTopologyFormModel): Promise<void> {
    await this.spinner.show();
    this.updateTopologyGQL
      .mutate(
        { input: { ...input, postamatId: this.postamatId } },
        {
          refetchQueries: [GetCellsDocument],
        }
      )
      .pipe(
        tap(({ data }) => {
          const result = data?.updateTopology?.postamat;
          const errors = data?.updateTopology?.errors;

          if (result) {
            this.ref.close(result);
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
    this.ref.close();
  }
}
