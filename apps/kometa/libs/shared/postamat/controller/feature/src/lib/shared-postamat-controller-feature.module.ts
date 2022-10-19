import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAbpModule } from '@kometa/shared/abp';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MenuModule } from 'primeng/menu';
import { ToolbarModule } from 'primeng/toolbar';
import { SharedPostamatControllerUiModule } from '@kometa/shared/postamat/controller/ui';
import { LocksPageComponent } from './locks-page/locks-page.component';
import { PromixControllerUpdateDialogComponent } from './promix-controller-update-dialog/promix-controller-update-dialog.component';
import { PromixControllerDetailDialogComponent } from './promix-controller-detail-dialog/promix-controller-detail-dialog.component';
import { PromixControllerDeleteDialogComponent } from './promix-controller-delete-dialog/promix-controller-delete-dialog.component';
import { ControllersPageComponent } from './controllers-page/controllers-page.component';
import { PromixControllerCreateDialogComponent } from './promix-controller-create-dialog/promix-controller-create-dialog.component';
import { ControllersPageDialogComponent } from './controllers-page-dialog/controllers-page-dialog.component';
import { LocksPageDialogComponent } from './locks-page-dialog/locks-page-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    SharedAbpModule,
    SharedPostamatControllerUiModule,
    PanelModule,
    ButtonModule,
    RippleModule,
    MenuModule,
    ToolbarModule,
  ],
  declarations: [
    ControllersPageComponent,
    LocksPageComponent,
    PromixControllerCreateDialogComponent,
    PromixControllerDeleteDialogComponent,
    PromixControllerDetailDialogComponent,
    PromixControllerUpdateDialogComponent,
    ControllersPageDialogComponent,
    LocksPageDialogComponent,
  ],
  exports: [ControllersPageComponent, LocksPageComponent],
})
export class SharedPostamatControllerFeatureModule {}
