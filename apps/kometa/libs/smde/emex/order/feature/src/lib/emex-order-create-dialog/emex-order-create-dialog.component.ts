import { Component } from '@angular/core';
import { EmexOrderFormService } from '../emex-order-form.service';
import {
  CreateEmexOrderFormModel,
  CreateEmexProductFormModel,
  UpdateEmexProductFormModel,
} from '@kometa/smde/emex/order/ui';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { EmexProductDialogService } from '../emex-product-dialog.service';
import { BehaviorSubject, Observable, switchMap, take, tap } from 'rxjs';
import {
  EmexProductFragment,
  EmexProductInput,
  EmexProductStatus,
  GetEmexOrdersDocument,
} from '@kometa/smde/emex/order/types';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { find, findIndex } from 'lodash';
import { CreateEmexOrderGQL } from '@kometa/smde/emex/order/data-access';
import { finalize, map } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { GetPackingPlacesGQL } from '@kometa/smde/packing-place/data-access';

@UntilDestroy()
@Component({
  selector: 'kometa-emex-order-create-dialog',
  templateUrl: './emex-order-create-dialog.component.html',
  styleUrls: ['./emex-order-create-dialog.component.scss'],
  providers: [EmexProductDialogService],
})
export class EmexOrderCreateDialogComponent {
  readonly formGroup: TypedFormGroup<CreateEmexOrderFormModel>;
  readonly productsInput$ = new BehaviorSubject<(EmexProductInput & { id?: string })[]>([]);
  readonly products$: Observable<EmexProductFragment[]> = this.productsInput$.pipe(
    switchMap((inputs) =>
      this.getPackingPlacesGQL
        .fetch({
          where: { id: { in: inputs.map((x) => x.packingPlaceId) } },
        })
        .pipe(
          map(({ data }) =>
            inputs.map(
              (x) =>
                ({
                  ...x,
                  status: EmexProductStatus.Created,
                  packingPlace: find(data.packingPlaces?.items, (p) => p.id === x.packingPlaceId),
                } as EmexProductFragment)
            )
          )
        )
    )
  );

  constructor(
    private readonly createEmexOrderGQL: CreateEmexOrderGQL,
    private readonly emexOrderFormService: EmexOrderFormService,
    private readonly emexProductDialogService: EmexProductDialogService,
    private readonly getPackingPlacesGQL: GetPackingPlacesGQL,
    private readonly ref: DynamicDialogRef,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {
    this.formGroup = this.emexOrderFormService.buildFormCreate();
  }

  onCreateProduct() {
    const dialog = this.emexProductDialogService.openCreate();
    dialog.onClose
      .pipe(
        take(1),
        tap((product: CreateEmexProductFormModel) => {
          if (product) {
            const products = this.productsInput$.getValue();
            this.productsInput$.next([
              ...products,
              {
                ...product,
                id: Math.random().toString(16),
              },
            ]);
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  onUpdateProduct(product: EmexProductFragment) {
    const dialog = this.emexProductDialogService.openUpdate(product);
    dialog.onClose
      .pipe(
        take(1),
        tap((updated: UpdateEmexProductFormModel) => {
          if (updated) {
            const products = [...this.productsInput$.getValue()];
            const index = findIndex(products, (x) => x.id === product.id);
            products[index] = updated;
            this.productsInput$.next(products);
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  onDeleteProduct(product: EmexProductFragment) {
    const dialog = this.emexProductDialogService.openDelete(product);
    dialog.onClose
      .pipe(
        take(1),
        tap((deleted) => {
          if (deleted) {
            const products = [...this.productsInput$.getValue()];
            this.productsInput$.next(products.filter((x) => x.id !== product.id));
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  async onSave(input: CreateEmexOrderFormModel) {
    const products = this.productsInput$.getValue();
    if (products.length > 0) {
      await this.spinner.show();
      this.createEmexOrderGQL
        .mutate(
          {
            input: {
              ...input,
              products: products.map((p) => ({
                packingPlaceId: p.packingPlaceId,
                typeBalance: p.typeBalance,
                typePayment: p.typePayment,
                barcode: p.barcode,
                name: p.name,
                vendorCode: p.vendorCode,
                manufacturer: p.manufacturer,
                quantity: p.quantity,
                price: p.price,
                vat: p.vat,
                sum: p.sum,
                manufacturerCountry: p.manufacturerCountry,
                manufacturerCountryCode: p.manufacturerCountryCode,
                marking: p.marking,
                gtd: p.gtd,
              })),
            },
          },
          {
            refetchQueries: [GetEmexOrdersDocument],
          }
        )
        .pipe(
          tap(({ data }) => {
            const result = data?.createEmexOrder?.emexOrder;
            const errors = data?.createEmexOrder?.errors;

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
  }

  onCancel(): void {
    this.ref.close();
  }
}
