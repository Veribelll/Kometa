import { BehaviorSubject } from 'rxjs';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CellDialogService } from '../cell-dialog.service';
import { LazyLoadEvent } from 'primeng/api';
import { isEmpty } from 'lodash';
import { QueryRef } from 'apollo-angular';
import { finalize, tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import {
  CellFilterInput,
  CellFragment,
  GetCellsQuery,
  GetCellsQueryVariables,
  SortEnumType,
} from '@kometa/shared/postamat/cell/types';
import {
  ActivateCellGQL,
  DeactivateCellGQL,
  GetCellsGQL,
} from '@kometa/shared/postamat/cell/data-access';
import { TopologyDialogService } from '@kometa/shared/topology/feature';

@UntilDestroy()
@Component({
  selector: 'kometa-cells-page',
  templateUrl: './cells-page.component.html',
  styleUrls: ['./cells-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CellDialogService],
})
export class CellsPageComponent {
  readonly cells$ = new BehaviorSubject<CellFragment[]>([]);
  readonly loading$ = new BehaviorSubject<boolean>(false);
  queryRef?: QueryRef<GetCellsQuery, GetCellsQueryVariables>;

  @Input()
  postamatId!: string;

  constructor(
    private readonly getCellsGQL: GetCellsGQL,
    private readonly activateCellGQL: ActivateCellGQL,
    private readonly deactivateCellGQL: DeactivateCellGQL,
    private readonly cellDialogService: CellDialogService,
    private readonly topologyDialogService: TopologyDialogService,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {}

  async onLazyLoad(event: LazyLoadEvent): Promise<void> {
    if (this.queryRef) {
      await this.queryRef.setVariables(this.getFilter(event));
    } else {
      this.queryRef = this.getCellsGQL.watch(this.getFilter(event), {
        useInitialLoading: true,
      });
      this.queryRef.valueChanges
        .pipe(
          tap(({ data, loading }) => {
            this.loading$.next(loading);
            if (data?.cells) {
              this.cells$.next(data.cells ?? []);
            }
          }),
          untilDestroyed(this)
        )
        .subscribe();
    }
  }

  onDetails({ id }: CellFragment) {
    this.cellDialogService.openDetail(id);
  }

  onCreate(): void {
    this.cellDialogService.openCreate(this.postamatId);
  }

  onUpdate(cell: CellFragment): void {
    this.cellDialogService.openUpdate(this.postamatId, cell);
  }

  async onActivate({ id }: CellFragment): Promise<void> {
    await this.spinner.show();
    this.activateCellGQL
      .mutate({
        input: {
          postamatId: this.postamatId,
          cellId: id,
        },
      })
      .pipe(
        tap(({ data }) => {
          const errors = data?.activateCell?.errors;
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

  async onDeactivate({ id }: CellFragment): Promise<void> {
    await this.spinner.show();
    this.deactivateCellGQL
      .mutate({
        input: {
          postamatId: this.postamatId,
          cellId: id,
        },
      })
      .pipe(
        tap(({ data }) => {
          const errors = data?.deactivateCell?.errors;
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

  onDelete(cell: CellFragment): void {
    this.cellDialogService.openDelete(this.postamatId, cell);
  }

  onAssignLock(cell: CellFragment): void {
    this.cellDialogService.openAssignLock(this.postamatId, cell);
  }

  onUpdateTopology(): void {
    this.topologyDialogService.openUpdate(this.postamatId);
  }

  onUpdateDisplay(): void {
    this.topologyDialogService.openUpdateDisplay(this.postamatId);
  }

  private getFilter({ globalFilter }: LazyLoadEvent): GetCellsQueryVariables {
    let where: CellFilterInput | undefined = undefined;
    if (!isEmpty(globalFilter)) {
      where = {
        or: [
          {
            name: { contains: globalFilter },
          },
        ],
      };
    }

    return {
      postamatId: this.postamatId,
      where,
      order: {
        name: SortEnumType.Asc,
      },
    };
  }
}
