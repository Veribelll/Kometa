import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IndividualEntrepreneurDetailFragment } from '@kometa/smde/contractor/types';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { GetIndividualEntrepreneurGQL } from '@kometa/smde/contractor/data-access';

@UntilDestroy()
@Component({
  selector: 'kometa-individual-entrepreneur-detail-dialog',
  templateUrl: './individual-entrepreneur-detail-dialog.component.html',
  styleUrls: ['./individual-entrepreneur-detail-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndividualEntrepreneurDetailDialogComponent {
  readonly loading$ = new BehaviorSubject(false);
  readonly individualEntrepreneur$ = new BehaviorSubject<
    IndividualEntrepreneurDetailFragment | undefined
  >(undefined);

  constructor(
    private readonly getIndividualEntrepreneurGQL: GetIndividualEntrepreneurGQL,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    const { id } = this.config.data;

    this.getIndividualEntrepreneurGQL
      .watch(
        { id },
        {
          useInitialLoading: true,
        }
      )
      .valueChanges.pipe(
        tap(({ data, loading }) => {
          this.loading$.next(loading);
          if (data?.individualEntrepreneurById) {
            this.individualEntrepreneur$.next(data.individualEntrepreneurById);
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
