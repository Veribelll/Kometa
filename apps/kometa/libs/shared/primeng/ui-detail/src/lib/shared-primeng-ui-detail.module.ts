import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DetailFieldComponent } from './detail-field/detail-field.component';
import { DetailBodyComponent } from './detail-body/detail-body.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InputSwitchModule],
  declarations: [DetailBodyComponent, DetailFieldComponent],
  exports: [DetailBodyComponent, DetailFieldComponent],
})
export class SharedPrimengUiDetailModule {}
