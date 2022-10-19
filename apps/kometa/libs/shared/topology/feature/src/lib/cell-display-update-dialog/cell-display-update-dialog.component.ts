import { Component } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import {
  CellDisplayFragment,
  CellDisplayInput,
  GetDataForUpdateCellDisplaysQuery,
} from '@kometa/shared/topology/types';
import {
  GetDataForUpdateCellDisplaysGQL,
  UpdatePostamatDisplayGQL,
} from '@kometa/shared/topology/data-access';

type TemplateCell = NonNullable<
  NonNullable<GetDataForUpdateCellDisplaysQuery['templatesCell']>['items']
>[0];
type TemplateSection = NonNullable<
  NonNullable<GetDataForUpdateCellDisplaysQuery['templatesSection']>['items']
>[0];

@UntilDestroy()
@Component({
  selector: 'kometa-cell-display-update-dialog',
  templateUrl: './cell-display-update-dialog.component.html',
  styleUrls: ['./cell-display-update-dialog.component.scss'],
})
export class CellDisplayUpdateDialogComponent {
  readonly templatesSection$ = new BehaviorSubject<TemplateSection[]>([]);
  readonly templatesCell$ = new BehaviorSubject<TemplateCell[]>([]);
  readonly displays$ = new BehaviorSubject<CellDisplayFragment[]>([]);
  readonly cells$ = new BehaviorSubject<{ id: string; name: string }[]>([]);
  readonly postamatId: string;

  constructor(
    private readonly updatePostamatDisplayGQL: UpdatePostamatDisplayGQL,
    private readonly getDataForUpdateCellDisplaysGQL: GetDataForUpdateCellDisplaysGQL,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    const { postamatId } = this.config.data;

    this.postamatId = postamatId;
    this.getDataForUpdateCellDisplaysGQL
      .watch(
        { postamatId: this.postamatId },
        {
          useInitialLoading: false,
        }
      )
      .valueChanges.pipe(
        tap(({ data }) => {
          this.templatesSection$.next(data.templatesSection?.items ?? []);
          this.templatesCell$.next(data.templatesCell?.items ?? []);
          this.displays$.next(data.postamatById.displays);
          this.cells$.next(data.postamatById.cells);
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  async onSave(input: CellDisplayInput[]): Promise<void> {
    await this.spinner.show();
    this.updatePostamatDisplayGQL
      .mutate({ input: { cellDisplays: input, postamatId: this.postamatId } })
      .pipe(
        tap(({ data }) => {
          const result = data?.updatePostamatDisplay?.postamat;
          const errors = data?.updatePostamatDisplay?.errors;

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
