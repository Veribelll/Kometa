import { ControlState } from './control-state';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

export interface TypedAbstractControl<T> extends AbstractControl {
  readonly value: T | null;
  readonly valueChanges: Observable<T | null>;

  setValue(
    value: T | null,
    options?: {
      onlySelf?: boolean;
      emitEvent?: boolean;
      emitModelToViewChange?: boolean;
      emitViewToModelChange?: boolean;
    }
  ): void;

  patchValue(
    value: T | Partial<T> | null,
    options?: {
      onlySelf?: boolean;
      emitEvent?: boolean;
      emitModelToViewChange?: boolean;
      emitViewToModelChange?: boolean;
    }
  ): void;

  reset(
    formState?: ControlState<T>,
    options?: {
      onlySelf?: boolean;
      emitEvent?: boolean;
    }
  ): void;

  getError(
    errorCode: string,
    path?: Array<Extract<keyof T, string> | number> | Extract<keyof T, string>
  ): any;
}
