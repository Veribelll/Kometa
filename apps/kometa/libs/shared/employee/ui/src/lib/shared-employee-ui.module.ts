import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FioPipe } from './fio.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [FioPipe],
  exports: [FioPipe],
})
export class SharedEmployeeUiModule {}
