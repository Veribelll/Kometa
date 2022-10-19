import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ValidationErrorComponent } from '@ngx-validate/core';

@Component({
  selector: 'kometa-error-validate',
  templateUrl: './error-validate.component.html',
  styleUrls: ['./error-validate.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorValidateComponent extends ValidationErrorComponent {}
