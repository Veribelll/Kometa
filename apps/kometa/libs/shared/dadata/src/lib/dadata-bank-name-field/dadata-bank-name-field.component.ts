import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { isObject, isString } from 'lodash';
import { DadataService } from '../dadata.service';
import { DadataBank } from '../data';
import { DadataSuggestion } from '../suggestion';

@Component({
  selector: 'dadata-bank-name-field',
  templateUrl: './dadata-bank-name-field.component.html',
  styleUrls: ['./dadata-bank-name-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: DadataBankNameFieldComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: DadataBankNameFieldComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DadataBankNameFieldComponent implements ControlValueAccessor, Validator {
  @Input()
  formControlName?: string;

  @Input()
  label?: string;

  @Input()
  inputId?: string;

  @Input()
  classLabel?: string;

  @Output()
  selectBank = new EventEmitter<DadataSuggestion<DadataBank>>();

  touched = false;
  disabled = false;
  selected: any;
  readonly banks$ = new BehaviorSubject<DadataSuggestion<DadataBank>[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange = (bank: any) => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched = () => {};

  constructor(private readonly dadataService: DadataService) {}

  change(bank: any): void {
    if (isString(bank)) {
      this.onChange(bank);
    } else if (isObject(bank) as any) {
      this.change(bank.value);
      this.selectBank.emit(bank);
    } else {
      this.onChange(null);
    }
  }

  filter({ query }: any): void {
    this.dadataService
      .getBanks(query)
      .pipe(
        tap(({ suggestions }) => {
          this.banks$.next(suggestions);
        })
      )
      .subscribe();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    if (isString(obj)) {
      this.selected = { value: obj };
    }
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  registerOnValidatorChange(fn: () => void): void {}

  validate(control: AbstractControl): ValidationErrors | null {
    return null;
  }
}
