import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TypedFormBuilder, TypedFormGroup } from '@kometa/shared/typed-form';
import { BehaviorSubject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { finalize, tap } from 'rxjs/operators';
import { PostamatNetworkPrinterFragment } from '@kometa/shared/postamat/types';
import { Validators } from '@angular/forms';
import { UpdatePostamatNetworkPrinterFormModel } from '@kometa/shared/postamat/ui';
import {
  GetPostamatNetworkPrinterGQL,
  UpdatePostamatNetworkPrinterGQL,
} from '@kometa/shared/postamat/data-access';

@UntilDestroy()
@Component({
  selector: 'kometa-postamat-network-printer-update',
  templateUrl: './postamat-network-printer-update.component.html',
  styleUrls: ['./postamat-network-printer-update.component.scss'],
})
export class PostamatNetworkPrinterUpdateComponent implements OnInit {
  formGroup?: TypedFormGroup<UpdatePostamatNetworkPrinterFormModel>;
  readonly loading$ = new BehaviorSubject<boolean>(false);

  @Input()
  postamatId!: string;

  @Output()
  readonly saved = new EventEmitter<PostamatNetworkPrinterFragment>();

  @Output()
  readonly cancel = new EventEmitter();

  constructor(
    private readonly getPostamatNetworkPrinterGQL: GetPostamatNetworkPrinterGQL,
    private readonly updatePostamatNetworkPrinterGQL: UpdatePostamatNetworkPrinterGQL,
    private readonly fb: TypedFormBuilder,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.getPostamatNetworkPrinterGQL
      .watch(
        { postamatId: this.postamatId },
        {
          useInitialLoading: true,
        }
      )
      .valueChanges.pipe(
        tap(({ data, loading }) => {
          this.loading$.next(loading);
          if (data?.postamatById.networkPrinter) {
            const {
              ipAddress,
              port,
              reconnectOnTimeout,
              isEnabled,
            } = data.postamatById.networkPrinter;
            this.formGroup = this.fb.group<UpdatePostamatNetworkPrinterFormModel>({
              ipAddress: this.fb.control(ipAddress, [Validators.required]),
              port: this.fb.control(port, [Validators.required]),
              reconnectOnTimeout: this.fb.control(reconnectOnTimeout, [Validators.required]),
              isEnabled: this.fb.control(isEnabled, [Validators.required]),
            });
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  async onSave(input: UpdatePostamatNetworkPrinterFormModel): Promise<void> {
    await this.spinner.show();
    this.updatePostamatNetworkPrinterGQL
      .mutate({ input: { ...input, postamatId: this.postamatId } })
      .pipe(
        tap(({ data }) => {
          const result = data?.updatePostamatNetworkPrinter?.postamat?.networkPrinter;
          const errors = data?.updatePostamatNetworkPrinter?.errors;

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
