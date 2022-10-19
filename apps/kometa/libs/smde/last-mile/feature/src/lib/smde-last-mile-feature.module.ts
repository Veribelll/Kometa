import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastMileAccountsUpdateDialogComponent } from './last-mile-accounts-update-dialog/last-mile-accounts-update-dialog.component';
import { SmdeLastMileUiModule } from '@kometa/smde/last-mile/ui';

@NgModule({
  imports: [CommonModule, SmdeLastMileUiModule],
  declarations: [LastMileAccountsUpdateDialogComponent],
})
export class SmdeLastMileFeatureModule {}
