import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthorizationService, CurrentContractorService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class ApiInterceptor implements HttpInterceptor {
  constructor(
    private readonly authorizationService: AuthorizationService,
    private readonly currentContractorService: CurrentContractorService
  ) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(
      req.clone({
        setHeaders: this.getAdditionalHeaders(req.headers),
      })
    );
  }

  getAdditionalHeaders(existingHeaders?: HttpHeaders) {
    const headers: { [key: string]: string | string[] } = {};

    const token = this.authorizationService.token;
    const contractorId = this.currentContractorService.currentId;

    if (token) {
      headers['Authorization'] = `${token.token_type} ${token.access_token}`;
    }

    if (contractorId) {
      headers['ContractorId'] = contractorId;
    }

    return headers;
  }
}
