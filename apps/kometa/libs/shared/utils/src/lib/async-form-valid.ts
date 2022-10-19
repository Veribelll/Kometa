import { AbstractControl, ValidationErrors } from '@angular/forms';
import { catchError, Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, first, switchMap } from 'rxjs/operators';

export function asyncFormValid(
  control: AbstractControl,
  sub: Observable<ValidationErrors | null>
): Observable<ValidationErrors | null> {
  return control.valueChanges.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    switchMap(() => sub),
    first(),
    catchError(() => of(null))
  );
}
