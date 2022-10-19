import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmdeCourierUiModule } from '@kometa/smde/courier/ui';
import { SharedPrimengUiFormModule } from '@kometa/shared/primeng/ui-form';

@NgModule({
  imports: [CommonModule, SmdeCourierUiModule, SharedPrimengUiFormModule],
})
export class SmdeCourierFeatureModule {}
