import { BehaviorSubject } from 'rxjs';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LazyLoadEvent, MenuItem } from 'primeng/api';
import { CompanyDialogService } from '../company-dialog.service';
import { IndividualEntrepreneurDialogService } from '../individual-entrepreneur-dialog.service';
import {
  ContractorFilterInput,
  ContractorFragment,
  GetContractorsQuery,
  GetContractorsQueryVariables,
  SortEnumType,
} from '@kometa/smde/contractor/types';
import { isEmpty } from 'lodash';
import { GetContractorsGQL } from '@kometa/smde/contractor/data-access';
import { tap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { QueryRef } from 'apollo-angular';

@UntilDestroy()
@Component({
  selector: 'kometa-contractors-page',
  templateUrl: './contractors-page.component.html',
  styleUrls: ['./contractors-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CompanyDialogService, IndividualEntrepreneurDialogService],
})
export class ContractorsPageComponent {
  readonly contractors$ = new BehaviorSubject<ContractorFragment[]>([]);
  readonly totalRecords$ = new BehaviorSubject<number>(0);
  readonly loading$ = new BehaviorSubject<boolean>(false);
  queryRef?: QueryRef<GetContractorsQuery, GetContractorsQueryVariables>;

  readonly menuToCreate: MenuItem[] = [
    {
      label: 'Компанию',
      command: () => this.onCreate('Company'),
    },
    {
      label: 'Индивидуального предпринимателя',
      command: () => this.onCreate('IndividualEntrepreneur'),
    },
  ];

  constructor(
    private readonly getContractorsGQL: GetContractorsGQL,
    private readonly companyDialogService: CompanyDialogService,
    private readonly individualEntrepreneurDialogService: IndividualEntrepreneurDialogService
  ) {}

  async onLazyLoad(event: LazyLoadEvent) {
    if (this.queryRef) {
      await this.queryRef.setVariables(this.getFilter(event));
    } else {
      this.queryRef = this.getContractorsGQL.watch(this.getFilter(event), {
        useInitialLoading: true,
      });
      this.queryRef.valueChanges
        .pipe(
          tap(({ data, loading }) => {
            this.loading$.next(loading);
            if (data?.contractors) {
              this.contractors$.next(data.contractors.items ?? []);
              this.totalRecords$.next(data.contractors.totalCount ?? 0);
            }
          }),
          untilDestroyed(this)
        )
        .subscribe();
    }
  }

  onDetails(contractor: ContractorFragment) {
    const id = contractor.id;
    if (contractor.__typename === 'Company') {
      this.companyDialogService.openDetail(id);
    }
    if (contractor.__typename === 'IndividualEntrepreneur') {
      this.individualEntrepreneurDialogService.openDetail(id);
    }
  }

  async onCreate(type: ContractorFragment['__typename']) {
    if (type === 'Company') {
      this.companyDialogService.openCreate();
    }
    if (type === 'IndividualEntrepreneur') {
      this.individualEntrepreneurDialogService.openCreate();
    }
  }

  async onUpdate(contractor: ContractorFragment) {
    const id = contractor.id;
    if (contractor.__typename === 'Company') {
      this.companyDialogService.openUpdate(id);
    }
    if (contractor.__typename === 'IndividualEntrepreneur') {
      this.individualEntrepreneurDialogService.openUpdate(id);
    }
  }

  async onDelete(contractor: ContractorFragment) {
    if (contractor.__typename === 'Company') {
      this.companyDialogService.openDelete(contractor);
    }
    if (contractor.__typename === 'IndividualEntrepreneur') {
      this.individualEntrepreneurDialogService.openDelete(contractor);
    }
  }

  private getFilter({ globalFilter, first, rows }: LazyLoadEvent): GetContractorsQueryVariables {
    let where: ContractorFilterInput | undefined = undefined;
    if (!isEmpty(globalFilter)) {
      where = {
        or: [
          {
            name: { contains: globalFilter },
          },
          {
            address: { contains: globalFilter },
          },
          {
            inn: { contains: globalFilter },
          },
        ],
      };
    }

    return {
      where,
      order: {
        name: SortEnumType.Asc,
      },
      skip: first,
      take: rows,
    };
  }
}
