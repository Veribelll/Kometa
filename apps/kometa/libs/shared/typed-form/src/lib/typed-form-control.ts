import { ControlState } from './control-state';
import { TypedAbstractControl } from './typed-abstract-control';
import { AbstractControlOptions, AsyncValidatorFn, FormControl, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';

export class TypedFormControl<T> extends FormControl implements TypedAbstractControl<T> {
  override readonly value!: T | null;
  override readonly valueChanges!: Observable<T | null>;

  constructor(
    formState?: ControlState<T>,
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ) {
    super(formState, validatorOrOpts, asyncValidator);
  }

  override setValue(
    value: T | null,
    options?: {
      onlySelf?: boolean;
      emitEvent?: boolean;
      emitModelToViewChange?: boolean;
      emitViewToModelChange?: boolean;
    }
  ) {
    super.setValue(value, options);
  }

  override patchValue(
    value: T | Partial<T> | null,
    options?: {
      onlySelf?: boolean;
      emitEvent?: boolean;
      emitModelToViewChange?: boolean;
      emitViewToModelChange?: boolean;
    }
  ) {
    super.patchValue(value, options);
  }

  override reset(
    formState?: ControlState<T>,
    options?: { onlySelf?: boolean; emitEvent?: boolean }
  ) {
    super.reset(formState, options);
  }

  override getError(
    errorCode: string,
    path?: Array<Extract<keyof T, string> | number> | Extract<keyof T, string>
  ): unknown {
    return super.getError(errorCode, path);
  }
}
