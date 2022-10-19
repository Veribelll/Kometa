import { Component, Input, ViewChild } from '@angular/core';
import { BehaviorSubject, finalize, tap } from 'rxjs';
import {
  CheckPinCodeGQL,
  IssuePackingPlaceGQL,
} from '@kometa/postamat/receive-packing-place/data-access';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PostamatViewPageComponent } from '@kometa/shared/topology/feature';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { DialogService } from 'primeng/dynamicdialog';
import { SendNewPinCodeDialogComponent } from '../send-new-pin-code-dialog/send-new-pin-code-dialog.component';

enum State {
  checkPin,
  receiving,
}

@UntilDestroy()
@Component({
  selector: 'kometa-receive-packing-place-page',
  templateUrl: './receive-packing-place-page.component.html',
  styleUrls: ['./receive-packing-place-page.component.scss'],
})
export class ReceivePackingPlacePageComponent {
  state = State.checkPin;
  readonly error$ = new BehaviorSubject(false);

  pinCode = '';
  cellId = '';

  @Input()
  postamatId!: string;

  @ViewChild('postamatView')
  readonly postamatView!: PostamatViewPageComponent;

  constructor(
    private readonly checkPinCodeGQL: CheckPinCodeGQL,
    private readonly issuePackingPlaceGQL: IssuePackingPlaceGQL,
    private readonly router: Router,
    private readonly dialogService: DialogService,
    private readonly spinner: NgxSpinnerService,
    private readonly toastrService: ToastrService
  ) {}

  onCheckPin() {
    this.checkPinCodeGQL
      .fetch({ postamatId: this.postamatId, pinCode: this.pinCode })
      .pipe(
        tap(({ data }) => {
          if (data?.cell) {
            this.postamatView.setSelected(data.cell.id);
            this.cellId = data.cell.id;
            this.state = State.receiving;
          } else {
            this.error$.next(true);
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  async issue() {
    await this.spinner.show();

    this.issuePackingPlaceGQL
      .mutate({
        input: {
          postamatId: this.postamatId,
          cellId: this.cellId,
          pinCode: this.pinCode,
        },
      })
      .pipe(
        tap(async ({ data }) => {
          const result = data?.issuePackingPlaceInPostamat?.postamat;
          const errors = data?.issuePackingPlaceInPostamat?.errors;

          if (result) {
            await this.router.navigate(['/']);
          }

          if (errors) {
            for (const { message } of errors) {
              this.toastrService.error(message);
            }
          }
        }),
        finalize(() => this.spinner.hide())
      )
      .subscribe();
  }

  sendNewPinCode() {
    this.dialogService.open(SendNewPinCodeDialogComponent, {
      width: '900px',
      closable: false,
      data: {
        postamatId: this.postamatId,
      },
    });
  }
}
