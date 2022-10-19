import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DadataAddressFieldComponent } from './dadata-address-field/dadata-address-field.component';
import { DadataOrganizationNameFieldComponent } from './dadata-organization-name-field/dadata-organization-name-field.component';
import { DadataBankNameFieldComponent } from './dadata-bank-name-field/dadata-bank-name-field.component';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';

@NgModule({
  imports: [CommonModule, SharedTypedFormModule, AutoCompleteModule],
  declarations: [
    DadataAddressFieldComponent,
    DadataOrganizationNameFieldComponent,
    DadataBankNameFieldComponent,
  ],
  exports: [
    DadataAddressFieldComponent,
    DadataOrganizationNameFieldComponent,
    DadataBankNameFieldComponent,
  ],
})
export class SharedDadataModule {}
