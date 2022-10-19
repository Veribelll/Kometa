import { GetControllersForDriverQuery } from '@kometa/shared/driver/types';
import { Observable } from 'rxjs';

type Controller = GetControllersForDriverQuery['controllers'][0];

export abstract class ControllerDriver {
  public abstract get type(): NonNullable<Controller['__typename']>;

  public abstract init(controller: Controller): Promise<void>;

  public abstract open(param: { address: string }): Observable<boolean>;
  public abstract open(param: { lockId: string }): Observable<boolean>;
  public abstract open(param: { cellId: string }): Observable<boolean>;

  public abstract isOpen(param: { address: string }): Observable<boolean>;
  public abstract isOpen(param: { lockId: string }): Observable<boolean>;
  public abstract isOpen(param: { cellId: string }): Observable<boolean>;
}
