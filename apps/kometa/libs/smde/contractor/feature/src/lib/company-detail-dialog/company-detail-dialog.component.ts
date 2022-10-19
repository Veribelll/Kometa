import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CompanyDetailFragment } from '@kometa/smde/contractor/types';
import { tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';
import { GetCompanyGQL } from '@kometa/smde/contractor/data-access';

@UntilDestroy()
@Component({
  selector: 'kometa-company-detail-dialog',
  templateUrl: './company-detail-dialog.component.html',
  styleUrls: ['./company-detail-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyDetailDialogComponent {
  readonly loading$ = new BehaviorSubject(false);
  readonly company$ = new BehaviorSubject<CompanyDetailFragment | undefined>(undefined);

  constructor(
    private readonly getCompanyGQL: GetCompanyGQL,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    const { id } = this.config.data;

    this.getCompanyGQL
      .watch(
        { id },
        {
          useInitialLoading: true,
        }
      )
      .valueChanges.pipe(
        tap(({ data, loading }) => {
          this.loading$.next(loading);
          if (data?.companyById) {
            this.company$.next(data.companyById);
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
