import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LoginComponent } from './login/login.component';

@Injectable()
export class AuthorizationDialogService {
  constructor(private readonly dialogService: DialogService) {}

  open(): DynamicDialogRef {
    return this.dialogService.open(LoginComponent, {
      header: 'Вход',
      width: '500px',
    });
  }
}
