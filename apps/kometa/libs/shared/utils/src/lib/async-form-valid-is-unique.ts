import { asyncFormValid } from './async-form-valid';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export function asyncFormValidIsUnique(control: AbstractControl, sub: Observable<boolean>) {
  return asyncFormValid(control, sub.pipe(map((isUnique) => (isUnique ? { isUnique } : null))));
}
