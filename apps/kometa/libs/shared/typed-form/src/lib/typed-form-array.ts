import { TypedAbstractControl } from './typed-abstract-control';
import { AbstractControlOptions, AsyncValidatorFn, FormArray, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';

export class TypedFormArray<T> extends FormArray implements TypedAbstractControl<T[]> {
  override readonly value!: T[] | null;
  override readonly valueChanges!: Observable<T[] | null>;
  override readonly controls!: TypedAbstractControl<T>[];

  constructor(
    controls: TypedAbstractControl<T>[],
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ) {
    super(controls, validatorOrOpts, asyncValidator);
  }

  override at(index: number): TypedAbstractControl<T> {
    return super.at(index);
  }

  override getRawValue(): T[] {
    return super.getRawValue();
  }

  override insert(index: number, control: TypedAbstractControl<T>, options?: { emitEvent?: boolean }) {
    super.insert(index, control, options);
  }

  override push(control: TypedAbstractControl<T>, options?: { emitEvent?: boolean }) {
    super.push(control, options);
  }

  override setControl(index: number, control: TypedAbstractControl<T>, options?: { emitEvent?: boolean }) {
    super.setControl(index, control, options);
  }
}
