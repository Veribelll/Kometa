import { ControlValueAccessor } from '@angular/forms';

export interface TypedControlValueAccessor<T> extends ControlValueAccessor {
  writeValue(obj: T): void;
  registerOnChange(fn: (value: T) => void): void;
  registerOnTouched(fn: any): void;
}
