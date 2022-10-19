import { Injectable } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

@Injectable()
export class LoginDialogService {
  constructor(private readonly dialogService: DialogService) {}

  open() {
    return this.dialogService.open(LoginDialogComponent, {
      showHeader: false,
      width: '800px',
    });
  }
}
