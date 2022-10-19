import { ControlState } from './control-state';
import { TypedAbstractControl } from './typed-abstract-control';
import { TypedFormGroup } from './typed-form-group';
import { AbstractControlOptions, AsyncValidatorFn, ValidatorFn } from '@angular/forms';

export declare type ControlConfig<T> =
  | TypedFormGroup<T>
  | TypedAbstractControl<T>
  | ControlState<T>
  | [
      ControlState<T>,
      (ValidatorFn | ValidatorFn[] | AbstractControlOptions)?,
      (AsyncValidatorFn | AsyncValidatorFn[])?
    ];
