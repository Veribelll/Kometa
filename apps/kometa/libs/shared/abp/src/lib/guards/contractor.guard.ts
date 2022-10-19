import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { ApplicationConfigurationService } from '../services';
import { map, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { isEmpty } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class ContractorGuard implements CanActivate {
  constructor(
    private readonly applicationConfigurationService: ApplicationConfigurationService,
    private readonly toastrService: ToastrService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.applicationConfigurationService.currentContractor$.pipe(
      map((x) => {
        const idIsEmpty = isEmpty(x.id);

        if (idIsEmpty) {
          this.toastrService.warning('Сначало выберите контрагента!');
        }

        return !idIsEmpty;
      })
    );
  }
}
