import { Observable } from 'rxjs';

export interface Scanner {
  get scan$(): Observable<string>;
}
