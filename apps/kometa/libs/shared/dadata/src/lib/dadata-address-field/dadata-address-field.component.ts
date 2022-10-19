import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { isString } from 'lodash';
import { DadataService } from '../dadata.service';
import { DadataAddress } from '../data';
import { DadataSuggestion } from '../suggestion';

@Component({
  selector: 'dadata-address-field',
  templateUrl: './dadata-address-field.component.html',
  styleUrls: ['./dadata-address-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: DadataAddressFieldComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: DadataAddressFieldComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DadataAddressFieldComponent implements ControlValueAccessor, Validator {
  @Input()
  formControlName?: string;

  @Input()
  label?: string;

  @Input()
  inputId?: string;

  @Input()
  classLabel?: string;

  touched = false;
  disabled = false;
  selected: any;
  readonly addresses$ = new BehaviorSubject<DadataSuggestion<DadataAddress>[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange = (address: string | null) => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched = () => {};

  constructor(private readonly dadataService: DadataService) {}

  change(address: DadataSuggestion<DadataAddress> | string | null): void {
    if (isString(address)) {
      this.onChange(address);
    } else {
      this.onChange(address?.value ?? '');
    }
  }

  filter({ query }: any): void {
    this.dadataService
      .getAddresses(query)
      .pipe(
        tap(({ suggestions }) => {
          this.addresses$.next(suggestions);
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

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(address: DadataSuggestion<DadataAddress> | string): void {
    if (isString(address)) {
      this.selected = { value: address };
    } else {
      this.selected = address;
      this.change(address);
    }
  }

  registerOnValidatorChange(fn: () => void): void {}

  validate(control: AbstractControl): ValidationErrors | null {
    return null;
  }
}
