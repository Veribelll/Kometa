import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, lastValueFrom, map, tap } from 'rxjs';
import { ScannerService } from '@kometa/postamat/feature-scanner';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  GetDataForPlacingPackingPlaceGQL,
  PutPackingPlaceInPostamatGQL,
} from '@kometa/postamat/placing-packing-place/data-access';
import {
  CellStatus,
  GetDataForPlacingPackingPlaceQuery,
  PackingPlaceForPlacementFragment,
  TypeCell,
} from '@kometa/postamat/placing-packing-place/types';
import { find } from 'lodash';
import { TypedFormControl } from '@kometa/shared/typed-form';
import { DialogService } from 'primeng/dynamicdialog';
import { CancelActionsPlaceDialogComponent } from '../cancel-actions-place-dialog/cancel-actions-place-dialog.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ShiftPackingPlaceDialogComponent } from '../shift-packing-place-dialog/shift-packing-place-dialog.component';
import { SelectCellDialogComponent } from '../select-cell-dialog/select-cell-dialog.component';

enum State {
  ScanPackingPlace,
  ScanCell,
}

type Cell = GetDataForPlacingPackingPlaceQuery['postamatById']['cells'][0];

@UntilDestroy()
@Component({
  selector: 'kometa-placing-packing-place-page',
  templateUrl: './placing-packing-place-page.component.html',
  styleUrls: ['./placing-packing-place-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacingPackingPlacePageComponent implements OnInit {
  readonly currentState$ = new BehaviorSubject(State.ScanPackingPlace);
  readonly message$ = new BehaviorSubject<string>('Отсканируйте штрих-код упаковочного места');
  readonly description$ = new BehaviorSubject<string>('');
  readonly scannedBarcode = new TypedFormControl<string>('');

  readonly inputs$ = new BehaviorSubject<
    { packingPlace: PackingPlaceForPlacementFragment; cell: Cell }[]
  >([]);
  readonly selectedPackingPlace$ = new BehaviorSubject<PackingPlaceForPlacementFragment | null>(
    null
  );
  readonly selectedCell$ = new BehaviorSubject<Cell | null>(null);

  readonly packingPlaces$ = new BehaviorSubject<PackingPlaceForPlacementFragment[]>([]);
  readonly cells$ = new BehaviorSubject<Cell[]>([]);
  readonly loading$ = new BehaviorSubject(false);

  readonly placementList$ = combineLatest([this.inputs$, this.packingPlaces$]).pipe(
    map(([inputs, packingPlaces]) =>
      packingPlaces.filter((p) => !inputs.some((i) => i.packingPlace.id === p.id))
    )
  );

  readonly placedList$ = combineLatest([this.inputs$, this.packingPlaces$, this.cells$]).pipe(
    map(([inputs, packingPlaces, cells]) =>
      inputs.map((i) => {
        const packingPlace = find(packingPlaces, (p) => p.id === i.packingPlace.id);
        const cell = find(cells, (c) => c.id === i.cell.id);

        return {
          customerId: packingPlace?.customer?.externalId ?? '',
          barcode: packingPlace?.barcode ?? '',
          cellName: cell?.name ?? '',
        };
      })
    )
  );

  readonly disableSelectCellButton$ = this.currentState$.pipe(
    map((state) => state === State.ScanPackingPlace)
  );
  readonly disableChangeCellButton$ = this.currentState$.pipe(
    map((state) => state === State.ScanPackingPlace)
  );
  readonly disableConfirmPlacementButton$ = this.selectedCell$.pipe(map((cell) => !cell));
  readonly disableConfirmPlacementInVirtualButton$ = this.currentState$.pipe(
    map((state) => state !== State.ScanCell)
  );

  get freeCells() {
    const inputs = this.inputs$.getValue();
    return this.cells$
      .getValue()
      .filter((x) => x.status === CellStatus.Free && !inputs.some((i) => i.cell.id === x.id));
  }

  get virtualCells() {
    return this.cells$.getValue().filter((x) => x.type === TypeCell.Virtual);
  }

  @Input()
  postamatId!: string;

  constructor(
    private readonly putPackingPlaceInPostamatGQL: PutPackingPlaceInPostamatGQL,
    private readonly getDataForPlacingPackingPlaceGQL: GetDataForPlacingPackingPlaceGQL,
    private readonly router: Router,
    private readonly scanner: ScannerService,
    private readonly dialogService: DialogService,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    this.scanner.scan$
      .pipe(
        tap((barcode) => this.scannedBarcode.setValue(barcode)),
        untilDestroyed(this)
      )
      .subscribe();

    this.scannedBarcode.valueChanges
      .pipe(
        tap((barcode) => this.scanning(barcode ?? '')),
        untilDestroyed(this)
      )
      .subscribe();
  }

  ngOnInit() {
    this.getDataForPlacingPackingPlaceGQL
      .watch({ postamatId: this.postamatId }, { useInitialLoading: true })
      .valueChanges.pipe(
        tap(({ data, loading }) => {
          this.loading$.next(loading);
          if (data) {
            this.cells$.next(data.postamatById.cells);
            this.packingPlaces$.next(data.packingPlaceByLastMileId);
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  onConfirmPlacement() {
    const cell = this.selectedCell$.getValue();
    const packingPlace = this.selectedPackingPlace$.getValue();

    if (cell && packingPlace) {
      this.confirmPlacement(cell, packingPlace);
    }
  }

  onConfirmPlacementInVirtual() {
    const cells = this.virtualCells.filter((x) => x.status === CellStatus.Free);
    const packingPlace = this.selectedPackingPlace$.getValue();

    const cell = find(cells);

    if (cell && packingPlace) {
      this.confirmPlacement(cell, packingPlace);
    }
  }

  onChangeCell() {
    const packingPlace = this.selectedPackingPlace$.getValue();
    const cell = this.getFreeCellBySizeId(packingPlace?.sizeId);

    if (cell) {
      this.selectedCell$.next(cell);
    }
  }

  onSelectCell() {
    const dialog = this.dialogService.open(SelectCellDialogComponent, {
      header: 'Выберите ячейку',
      closable: false,
      data: {
        postamatId: this.postamatId,
        disables: [],
      },
    });

    dialog.onClose
      .pipe(
        tap((cellId) => {
          const cells = this.cells$.getValue();
          const cell = find(cells, (c) => c.id === cellId);
          if (cell) {
            this.selectedCell$.next(cell);
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  onShift() {
    /*this.dialogService.open(ShiftPackingPlaceDialogComponent, {
      header: 'Выберите ячейку',
      closable: false,
      data: {
        postamatId: this.postamatId
      }
    })*/
  }

  onOpenCancel() {
    const dialog = this.dialogService.open(CancelActionsPlaceDialogComponent, {
      header: 'Отмена',
      width: '800px',
      closable: false,
      data: {
        placedList: this.inputs$.getValue(),
      },
    });

    dialog.onClose
      .pipe(
        tap((placedList) => {
          if (placedList) {
            this.inputs$.next(placedList);
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  onChangeScannedBarcode(event: any) {
    this.scannedBarcode.setValue(event.target.value);
  }

  onOpenServiceCell() {
    console.log('open');
  }

  async onSave() {
    const inputs = this.inputs$.getValue();

    if (inputs.length <= 0) {
      await this.router.navigate(['/']);
      return;
    }

    await this.spinner.show();

    for (const { cell, packingPlace } of inputs) {
      const mutate$ = this.putPackingPlaceInPostamatGQL
        .mutate({
          input: {
            postamatId: this.postamatId,
            cellId: cell.id,
            packingPlaceIds: [packingPlace.id],
          },
        })
        .pipe(
          tap(({ data }) => {
            const errors = data?.putPackingPlaceInPostamat?.errors;

            if (errors) {
              for (const { message } of errors) {
                this.toastrService.error(message);
              }
            }
          }),
          untilDestroyed(this)
        );

      await lastValueFrom(mutate$);
    }

    await this.spinner.hide();
    await this.router.navigate(['/']);
  }

  private scanning(barcode: string): void {
    const state = this.currentState$.getValue();

    switch (state) {
      case State.ScanPackingPlace:
        this.scanningBarcodePackingPlace(barcode);
        break;
      case State.ScanCell:
        this.scanningBarcodeCell(barcode);
        break;
    }
  }

  private scanningBarcodePackingPlace(barcode: string): void {
    const packingPlaces = this.packingPlaces$.getValue();
    const inputs = this.inputs$.getValue();

    const packingPlace = find(packingPlaces, (x) => x.barcode === barcode);

    if (packingPlace) {
      if (inputs.some((x) => x.packingPlace.id === packingPlace.id)) {
        this.message$.next(`Упаковочное место ${barcode} уже уложено`);
        return;
      }

      this.selectedPackingPlace$.next(packingPlace);

      const cell =
        this.getCellByCustomerId(packingPlace.customer?.id) ??
        this.getFreeCellBySizeId(packingPlace.sizeId);
      if (cell) {
        this.message$.next(`Упаковочное место ${barcode}`);
        this.description$.next(`Уложите товар в ячейку ${cell.name} и отсканируйте ее`);
        this.selectedCell$.next(cell);
        this.currentState$.next(State.ScanCell);
      } else {
        this.description$.next(`Нет свободных ячеек`);
      }
    } else {
      this.message$.next(`Упаковочное место ${barcode} не найдено`);
      this.description$.next('');
    }
  }

  private scanningBarcodeCell(barcode: string): void {
    const cell = this.selectedCell$.getValue();
    const packingPlace = this.selectedPackingPlace$.getValue();

    if (cell?.barcode === barcode && packingPlace) {
      this.confirmPlacement(cell, packingPlace);
    } else {
      this.message$.next(`Отсканирована не верная ячейка ШК ${barcode}.`);
      this.description$.next(`Ожидается ${cell?.barcode}`);
    }
  }

  private confirmPlacement(cell: Cell, packingPlace: PackingPlaceForPlacementFragment) {
    const inputs = this.inputs$.getValue();
    this.inputs$.next([...inputs, { cell, packingPlace }]);
    this.message$.next('Отсканируйте штрих-код упаковочного места');
    this.description$.next('');
    this.selectedCell$.next(null);
    this.selectedPackingPlace$.next(null);
    this.currentState$.next(State.ScanPackingPlace);
  }

  private getFreeCellBySizeId(sizeId?: string | null): Cell | null | undefined {
    const selected = this.selectedCell$.getValue();
    const cells = this.freeCells;
    return find(cells, (x) => x.sizeId === sizeId && x.id !== selected?.id);
  }

  private getCellByCustomerId(customerId?: string | null): Cell | null | undefined {
    const inputs = this.inputs$.getValue();
    const cells = this.cells$.getValue();
    return (
      find(cells, (x) => x.places.some((p) => p.packingPlace.customerId === customerId)) ??
      find(inputs, (i) => i.packingPlace.customerId === customerId)?.cell
    );
  }
}
