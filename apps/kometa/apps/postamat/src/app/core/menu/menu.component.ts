import { Component } from '@angular/core';
import { LoginDialogService } from '../login-dialog.service';
import { Router } from '@angular/router';
import { take, tap } from 'rxjs';

@Component({
  selector: 'kometa-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [LoginDialogService],
})
export class MenuComponent {
  constructor(
    private readonly loginDialogService: LoginDialogService,
    private readonly router: Router
  ) {}

  onAuth(url: string) {
    const dialog = this.loginDialogService.open();
    dialog.onClose
      .pipe(
        take(1),
        tap(async (isAuth) => {
          if (isAuth) {
            await this.router.navigate([url]);
          }
        })
      )
      .subscribe();
  }
}
