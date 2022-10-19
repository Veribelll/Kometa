import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthorizationDialogService } from '../authorization-dialog.service';
import { BehaviorSubject, EMPTY, Observable, switchMap, tap } from 'rxjs';
import {
  AuthorizationService,
  CurrentContractorService,
  PermissionService,
} from '@kometa/shared/abp';

@Component({
  selector: 'kometa-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.scss'],
  providers: [AuthorizationDialogService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavTopComponent {
  contractorId = this.currentContractorService.currentId;
  readonly contractors$: Observable<{ id: string; name: string }[]>;
  readonly items$ = new BehaviorSubject<MenuItem[]>([]);
  readonly grantedPolicies = [
    'AbpTenantManagement.Tenants',
    'ContractorManagement.Contractors',
    'ContractorManagement.Employees',
    'AbpIdentity.Roles',
    'PackingPlaceManagement.PackingPlaces',
    'PackingPlaceManagement.ShipmentRequests',
    'PackingPlaceManagement.ReturnRequests',
    'Emex.Orders',
    'LastMileManagement.LastMiles',
    'TopologyManagement.Templates',
    'NotificationManagement.SmsAccounts',
    'NotificationManagement.SmsTemplates',
    'Emex.Accounts',
  ];

  get isLogin$() {
    return this.authorizationService.isLogin$;
  }

  constructor(
    public readonly permissionService: PermissionService,
    private readonly authorizationService: AuthorizationService,
    private readonly authorizationDialogService: AuthorizationDialogService,
    private readonly currentContractorService: CurrentContractorService
  ) {
    this.contractors$ = this.currentContractorService.selectableContractors$;

    const setMenu$ = this.permissionService.getGrantedPolicies$(this.grantedPolicies).pipe(
      tap((policies) => {
        this.items$.next([
          {
            label: 'Главная',
            routerLink: '/',
          },
          {
            label: 'Арендаторы',
            routerLink: '/tenants',
            visible: policies['AbpTenantManagement.Tenants'],
          },
          {
            label: 'Организации',
            items: [
              {
                label: 'Организации',
                routerLink: '/contractors',
                visible: policies['ContractorManagement.Contractors'],
              },
              {
                label: 'Работники',
                routerLink: '/employees',
                visible: policies['ContractorManagement.Employees'],
              },
              {
                label: 'Роли',
                routerLink: '/roles',
                visible: policies['AbpIdentity.Roles'],
              },
            ],
          },
          {
            label: 'Заказы',
            items: [
              {
                label: 'Упаковочные места',
                routerLink: 'packing-places',
                visible: policies['PackingPlaceManagement.PackingPlaces'],
              },
              {
                label: 'Заявки на отправку',
                routerLink: 'shipment-requests',
                visible: policies['PackingPlaceManagement.ShipmentRequests'],
              },
              {
                label: 'Заявки на возврат',
                routerLink: 'return-requests',
                visible: policies['PackingPlaceManagement.ReturnRequests'],
              },
              {
                label: 'Emex',
                routerLink: '/emex/orders',
                visible: policies['Emex.Orders'],
              },
            ],
          },
          {
            label: 'Последние мили',
            items: [
              {
                label: 'Постаматы',
                routerLink: '/postamats',
                visible: policies['LastMileManagement.LastMiles'],
              },
            ],
          },
          {
            label: 'Настройки',
            items: [
              {
                label: 'Постамат',
                items: [
                  {
                    label: 'Шаблоны ячеек',
                    routerLink: 'topology/templates-cell',
                    visible: policies['TopologyManagement.Templates'],
                  },
                  {
                    label: 'Шаблоны секций',
                    routerLink: 'topology/templates-section',
                    visible: policies['TopologyManagement.Templates'],
                  },
                  {
                    label: 'Шаблоны постаматов',
                    routerLink: 'topology/templates-postamat',
                    visible: policies['TopologyManagement.Templates'],
                  },
                ],
              },
              {
                label: 'Уведомления',
                items: [
                  {
                    label: 'Смс аккаунты',
                    routerLink: '/sms/accounts',
                    visible: policies['NotificationManagement.SmsAccounts'],
                  },
                  {
                    label: 'Шаблоны',
                    routerLink: '/sms/templates',
                    visible: policies['NotificationManagement.SmsTemplates'],
                  },
                ],
              },
              {
                label: 'Баланс',
                items: [
                  {
                    label: 'Аккаунты',
                    items: [
                      {
                        label: 'EmEx',
                        routerLink: '/emex/accounts',
                        visible: policies['Emex.Accounts'],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ]);
      })
    );

    this.authorizationService.isLogin$
      .pipe(
        switchMap((isLogin) => {
          if (isLogin) {
            return setMenu$;
          } else {
            this.items$.next([
              {
                label: 'Главная',
                routerLink: '/',
              },
            ]);

            return EMPTY;
          }
        })
      )
      .subscribe();
  }

  public onSingIn() {
    this.authorizationDialogService.open();
  }

  public async onLogout() {
    await this.authorizationService.logout();
  }

  public async onChangeContractorId(event: { value: string }) {
    await this.currentContractorService.setId(event.value);
  }
}
