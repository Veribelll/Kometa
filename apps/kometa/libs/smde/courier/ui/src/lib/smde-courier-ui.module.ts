import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedPrimengUiTableModule } from '@kometa/shared/primeng/ui-table';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [CommonModule, SharedPrimengUiTableModule, TableModule],
  declarations: [],
  exports: [],
})
export class SmdeCourierUiModule {}
