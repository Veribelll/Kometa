import { Injectable } from '@angular/core';
import { GetApplicationConfigurationGQL } from '../graphql-apollo';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, map } from 'rxjs';
import { GetApplicationConfigurationQuery } from '../graphql-types';

const configurationInit: GetApplicationConfigurationQuery['applicationConfiguration'] = {
  auth: {
    policies: [],
    grantedPolicies: [],
  },
  currentContractor: {},
  selectableContractors: [],
  currentTenant: {
    isAvailable: false,
  },
  currentUser: {
    emailVerified: false,
    phoneNumberVerified: false,
    roles: [],
  },
  localization: {
    defaultResourceName: '',
    texts: [],
    languages: [],
  },
  setting: {
    values: [],
  },
  features: {
    values: [],
  },
};

@Injectable({
  providedIn: 'root',
})
export class ApplicationConfigurationService {
  private readonly _configuration$ = new BehaviorSubject(configurationInit);

  get configuration$() {
    return this._configuration$.asObservable();
  }

  get auth$() {
    return this.configuration$.pipe(map((x) => x.auth));
  }

  get currentTenant$() {
    return this.configuration$.pipe(map((x) => x.currentTenant));
  }

  get currentContractor$() {
    return this.configuration$.pipe(map((x) => x.currentContractor));
  }

  get selectableContractors$() {
    return this.configuration$.pipe(map((x) => x.selectableContractors));
  }

  get currentUser$() {
    return this.configuration$.pipe(map((x) => x.currentUser));
  }

  get localization$() {
    return this.configuration$.pipe(map((x) => x.localization));
  }

  constructor(private readonly getApplicationConfigurationGQL: GetApplicationConfigurationGQL) {}

  get() {
    return this.getApplicationConfigurationGQL
      .fetch({}, { fetchPolicy: 'no-cache' })
      .pipe(tap(({ data }) => this._configuration$.next(data?.applicationConfiguration)));
  }
}
