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
import { DadataParty } from '../data';
import { DadataSuggestion } from '../suggestion';

@Component({
  selector: 'dadata-organization-name-field',
  templateUrl: './dadata-organization-name-field.component.html',
  styleUrls: ['./dadata-organization-name-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: DadataOrganizationNameFieldComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: DadataOrganizationNameFieldComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DadataOrganizationNameFieldComponent implements ControlValueAccessor, Validator {
  @Input() formControlName?: string;

  @Input()
  type?: 'LEGAL' | 'INDIVIDUAL';

  @Input()
  label?: string;

  @Input()
  inputId?: string;

  @Input()
  classLabel?: string;

  @Output()
  selectOrganization = new EventEmitter<DadataSuggestion<DadataParty>>();

  touched = false;
  disabled = false;
  selected: any;
  readonly organizations$ = new BehaviorSubject<DadataSuggestion<DadataParty>[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange = (organization: any) => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched = () => {};

  constructor(private readonly dadataService: DadataService) {}

  change(organization: any): void {
    if (isString(organization)) {
      this.onChange(organization);
    } else if (isObject(organization) as any) {
      this.change(organization.value);
      this.selectOrganization.emit(organization);
    } else {
      this.onChange(null);
    }
  }

  filter({ query }: any): void {
    this.dadataService
      .getOrganizations(query, this.type)
      .pipe(
        tap(({ suggestions }) => {
          this.organizations$.next(suggestions);
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
