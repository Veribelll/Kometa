import { Inject, Injectable } from '@angular/core';
import { ENVIRONMENT } from '../tokens';
import { Environment } from '../environment';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  constructor(@Inject(ENVIRONMENT) private readonly environment: Environment) {}

  getValue() {
    return this.environment;
  }

  getApiUrl(key?: string) {
    const apis = this.environment.apis;
    if (key) {
      return apis[key]?.url ?? apis.default.url;
    } else {
      return apis.default.url;
    }
  }
}
