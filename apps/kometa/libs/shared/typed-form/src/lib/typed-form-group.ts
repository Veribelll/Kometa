import { TypedAbstractControl } from './typed-abstract-control';
import { AbstractControlOptions, AsyncValidatorFn, FormGroup, ValidatorFn } from '@angular/forms';

export class TypedFormGroup<T extends { [key: string]: any }>
  extends FormGroup
  implements TypedAbstractControl<T>
{
  override readonly value!: T | null;
  override readonly controls!: {
    [key in keyof T]: TypedAbstractControl<T[key]>;
  };

  constructor(
    controls: {
      [key in keyof T]: TypedAbstractControl<T[key]>;
    },
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ) {
    super(controls, validatorOrOpts, asyncValidator);
  }

  override get<K extends keyof T>(
    path: Array<Extract<K, string> | number> | Extract<K, string>
  ): TypedAbstractControl<T[K]> {
    return super.get(path) as TypedAbstractControl<T[K]>;
  }

  override addControl<K extends keyof T>(
    name: string,
    control: TypedAbstractControl<T[K]>,
    options?: { emitEvent?: boolean }
  ) {
    super.addControl(name, control, options);
  }

  override contains(controlName: Extract<keyof T, string>): boolean {
    return super.contains(controlName);
  }

  override getRawValue(): T {
    return super.getRawValue();
  }

  override setValue(value: T, options?: { onlySelf?: boolean; emitEvent?: boolean }) {
    super.setValue(value, options);
  }

  override patchValue(value: Partial<T>, options?: { onlySelf?: boolean; emitEvent?: boolean }) {
    super.patchValue(value, options);
  }

  override registerControl<K extends keyof T>(
    name: string,
    control: TypedAbstractControl<T[K]>
  ): TypedAbstractControl<T[K]> {
    return super.registerControl(name, control);
  }

  override setControl<K extends keyof T>(
    name: Extract<keyof T, string>,
    control: TypedAbstractControl<T[K]>,
    options?: { emitEvent?: boolean }
  ) {
    super.setControl(name, control, options);
  }

  override removeControl(name: Extract<keyof T, string>, options?: { emitEvent?: boolean }) {
    super.removeControl(name, options);
  }

  override reset(value?: T, options?: { onlySelf?: boolean; emitEvent?: boolean }) {
    super.reset(value, options);
  }
}
