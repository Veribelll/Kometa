import { ControllerDriver } from './controller.driver';
import { GetControllersForDriverQuery } from '@kometa/shared/driver/types';
import { Observable, of } from 'rxjs';

type Controller = GetControllersForDriverQuery['controllers'][0];

export class NullControllerDriver extends ControllerDriver {
  override get type(): NonNullable<Controller['__typename']> {
    return 'PromixController';
  }

  override init(controller: Controller): Promise<void> {
    return Promise.resolve();
  }

  isOpen(param: { address: string }): Observable<boolean>;
  isOpen(param: { lockId: string }): Observable<boolean>;
  isOpen(param: { cellId: string }): Observable<boolean>;
  isOpen(): Observable<boolean> {
    return of(false);
  }

  open(param: { address: string }): Observable<boolean>;
  open(param: { lockId: string }): Observable<boolean>;
  open(param: { cellId: string }): Observable<boolean>;
  open(): Observable<boolean> {
    return of(false);
  }
}
