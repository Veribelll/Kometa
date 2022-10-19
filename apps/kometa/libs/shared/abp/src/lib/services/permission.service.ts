import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApplicationConfigurationService } from './application-configuration.service';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  private get policies$(): Observable<Record<string, boolean>> {
    return this.applicationConfigurationService.auth$.pipe(
      map(({ grantedPolicies }) => {
        if (grantedPolicies) {
          return grantedPolicies?.reduce((obj, x) => ({ ...obj, [x.key]: x.value }), {});
        }
        return {};
      })
    );
  }

  constructor(private readonly applicationConfigurationService: ApplicationConfigurationService) {}

  getGrantedPolicy$(key: string): Observable<boolean> {
    return this.policies$.pipe(map((x) => x[key] ?? false));
  }

  getGrantedPolicies$(keys: string[]): Observable<Record<string, boolean>> {
    return this.policies$.pipe(
      map((policies) => {
        return keys.reduce((obj, k) => ({ ...obj, [k]: policies[k] ?? false }), {});
      })
    );
  }
}
