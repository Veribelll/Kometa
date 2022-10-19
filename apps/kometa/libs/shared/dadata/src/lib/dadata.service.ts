import { Observable } from 'rxjs';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_KEY_DADATA } from './api-key-dadata.token';
import { DadataConfig } from './dadata-config';
import { DadataResponse } from './dadata-response';
import { DadataAddress, DadataBank, DadataParty } from './data';

@Injectable({
  providedIn: 'root',
})
export class DadataService {
  private readonly http: HttpClient;

  get headers(): HttpHeaders {
    return new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Token ' + this.apiKey,
    });
  }

  constructor(
    private readonly httpBackend: HttpBackend,
    @Inject(API_KEY_DADATA) private readonly apiKey: string
  ) {
    this.http = new HttpClient(httpBackend);
  }

  public getAddresses(
    value: string,
    config?: DadataConfig
  ): Observable<DadataResponse<DadataAddress>> {
    const httpOptions = {
      headers: this.headers,
    };

    const body = {
      query: value,
      count: config?.limit,
      location: config?.locations ?? '',
      location_bust: config?.locationsBoost,
      from_bound: config?.bounds?.fromBound,
      to_bound: config?.bounds?.toBound,
    };

    return this.http.post<DadataResponse<DadataAddress>>(
      'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
      body,
      httpOptions
    );
  }

  public getOrganizations(
    value: string,
    type?: 'LEGAL' | 'INDIVIDUAL'
  ): Observable<DadataResponse<DadataParty>> {
    const httpOptions = {
      headers: this.headers,
    };

    const body = {
      query: value,
      status: ['ACTIVE'],
      type,
    };

    return this.http.post<DadataResponse<DadataParty>>(
      'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party',
      body,
      httpOptions
    );
  }

  public getBanks(value: string): Observable<DadataResponse<DadataBank>> {
    const httpOptions = {
      headers: this.headers,
    };

    const body = {
      query: value,
      status: ['ACTIVE'],
      type: ['BANK', 'BANK_BRANCH'],
    };

    return this.http.post<DadataResponse<DadataBank>>(
      'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/bank',
      body,
      httpOptions
    );
  }
}
