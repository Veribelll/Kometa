import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom, map, Observable, tap } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { TokenDto } from '../token.dto';
import { EnvironmentService } from './environment.service';
import { ApplicationConfigurationService } from './application-configuration.service';
import { Router } from '@angular/router';
import { CurrentContractorService } from './current-contractor.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private readonly _token$ = new BehaviorSubject<TokenDto | null>(null);

  private get url() {
    const { apis } = this.environmentService.getValue();
    return apis.default.url + '/connect/token';
  }

  get isLogin(): boolean {
    return !!this._token$.getValue()?.access_token;
  }

  get isLogin$(): Observable<boolean> {
    return this._token$.asObservable().pipe(map((x) => !!x?.access_token));
  }

  get token() {
    return this._token$.getValue();
  }

  get token$() {
    return this._token$.asObservable();
  }

  constructor(
    private readonly http: HttpClient,
    private readonly environmentService: EnvironmentService,
    private readonly applicationConfigurationService: ApplicationConfigurationService,
    private readonly currentContractorService:CurrentContractorService,
    private readonly router: Router,
    private readonly toastr: ToastrService
  ) {
    const token = localStorage.getItem('authorization');
    if (token) {
      this._token$.next(JSON.parse(token));
    }
  }

  async loginByAccessKey(barcode: string, lastMileId: string, remember = false) {
    const environment = this.environmentService.getValue();
    const { client_id, client_secret, scope } = environment.auth;

    const body = new URLSearchParams();

    body.set('client_id', client_id ?? '');
    body.set('client_secret', client_secret ?? '');
    body.set('scope', scope ?? '');
    body.set('grant_type', 'last_mile_access_key_credentials');
    body.set('last_mile_id', lastMileId);
    body.set('barcode', barcode);

    const token = await this.getToken(body);

    if (token && remember) {
      localStorage.setItem('authorization', JSON.stringify(token));
    }

    return !!token;
  }

  async login(username: string, password: string, remember = false): Promise<boolean> {
    const environment = this.environmentService.getValue();
    const { client_id, client_secret, scope } = environment.auth;

    const body = new URLSearchParams();

    body.set('client_id', client_id ?? '');
    body.set('client_secret', client_secret ?? '');
    body.set('scope', scope ?? '');
    body.set('grant_type', 'password');
    body.set('username', username);
    body.set('password', password);

    const token = await this.getToken(body);

    if (token && remember) {
      localStorage.setItem('authorization', JSON.stringify(token));
    }

    return !!token;
  }

  async refresh(): Promise<boolean> {
    const environment = this.environmentService.getValue();
    const { client_id, client_secret, scope } = environment.auth;
    const token = this._token$.getValue();

    const body = new URLSearchParams();

    body.set('client_id', client_id ?? '');
    body.set('client_secret', client_secret ?? '');
    body.set('scope', scope ?? '');
    body.set('grant_type', 'refresh_token');
    body.set('refresh_token', token?.refresh_token ?? '');

    return !!(await this.getToken(body));
  }

  async logout(): Promise<void> {
    localStorage.clear();
    this._token$.next(null);
    await this.currentContractorService.setId(null);
    await lastValueFrom(this.applicationConfigurationService.get());
    await this.router.navigate(['/']);
  }

  private async getToken(body: URLSearchParams): Promise<TokenDto | null> {
    const query$ = this.http
      .post<TokenDto>(this.url, body, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .pipe(tap((t) => this._token$.next(t)));

    try {
      const token = await lastValueFrom(query$);
      await lastValueFrom(this.applicationConfigurationService.get());
      return token;
    } catch (e) {
      if (e instanceof HttpErrorResponse) {
        this.toastr.error(e.error['error_description'] ?? 'Произошла ошибка!');
      }
      return null;
    }
  }
}
