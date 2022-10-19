import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TableActionsComponent } from './table-actions/table-actions.component';
import { TableCaptionComponent } from './table-caption/table-caption.component';
import { SharedAbpModule } from '@kometa/shared/abp';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';
import { SharedTypedFormModule } from '@kometa/shared/typed-form';

@NgModule({
  imports: [
    CommonModule,
    SharedAbpModule,
    SharedPrimengUiFormModule,
    SharedTypedFormModule,
    ButtonModule,
    RippleModule,
    TooltipModule,
    InputTextModule,
    FormsModule,
  ],
  declarations: [TableActionsComponent, TableCaptionComponent],
  exports: [TableActionsComponent, TableCaptionComponent],
})
export class SharedPrimengUiTableModule {}
