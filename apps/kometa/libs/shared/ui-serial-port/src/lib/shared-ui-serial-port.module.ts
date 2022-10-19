import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';
import { SerialPortFormComponent } from './serial-port-form/serial-port-form.component';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  imports: [
    CommonModule,
    SharedTypedFormModule,
    SharedPrimengUiFormModule,
    DropdownModule,
    InputNumberModule,
  ],
  declarations: [SerialPortFormComponent],
  exports: [SerialPortFormComponent],
})
export class SharedUiSerialPortModule {}
