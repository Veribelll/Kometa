import { AbstractControlOptions, AsyncValidatorFn, FormBuilder, ValidatorFn } from '@angular/forms';
import { ControlConfig } from './control-config';
import { ControlState } from './control-state';
import { TypedAbstractControl } from './typed-abstract-control';
import { TypedFormArray } from './typed-form-array';
import { TypedFormControl } from './typed-form-control';
import { TypedFormGroup } from './typed-form-group';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TypedFormBuilder extends FormBuilder {
  override array<T>(
    controlsConfig: ControlConfig<T>[],
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ): TypedFormArray<T> {
    const controls = controlsConfig.map((c) => this.createControl(c));
    return new TypedFormArray<T>(controls, validatorOrOpts, asyncValidator);
  }

  override control<T>(
    formState: ControlState<T>,
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ): TypedFormControl<T> {
    return new TypedFormControl<T>(formState, validatorOrOpts, asyncValidator);
  }

  override group<T extends { [key: string]: any }>(
    controlsConfig: { [key in keyof T]: ControlConfig<T[key]> },
    options?: AbstractControlOptions | null
  ): TypedFormGroup<T> {
    const controls = this.reduceControls<T>(controlsConfig);

    const validators = options?.validators != null ? options.validators : null;
    const asyncValidators = options?.asyncValidators != null ? options.asyncValidators : null;
    const updateOn = options?.updateOn != null ? options.updateOn : undefined;

    return new TypedFormGroup<T>(controls, { asyncValidators, updateOn, validators });
  }

  protected reduceControls<T extends { [key: string]: any }>(controlsConfig: {
    [key in keyof T]: ControlConfig<T[key]>;
  }) {
    const controls: { [key: string]: TypedAbstractControl<T> } = {};
    Object.keys(controlsConfig).forEach((controlName) => {
      controls[controlName] = this.createControl(controlsConfig[controlName]);
    });
    return controls as { [key in keyof T]: TypedAbstractControl<T[key]> };
  }

  protected createControl(controlConfig: ControlConfig<any>): TypedAbstractControl<any> {
    if (
      controlConfig instanceof TypedFormControl ||
      controlConfig instanceof TypedFormArray ||
      controlConfig instanceof TypedFormGroup
    ) {
      return controlConfig;
    } else if (Array.isArray(controlConfig)) {
      const value = controlConfig[0];
      const validator: ValidatorFn = controlConfig.length > 1 ? controlConfig[1] : null;
      const asyncValidator: AsyncValidatorFn = controlConfig.length > 2 ? controlConfig[2] : null;
      return this.control(value, validator, asyncValidator);
    } else {
      return this.control(controlConfig);
    }
  }
}
