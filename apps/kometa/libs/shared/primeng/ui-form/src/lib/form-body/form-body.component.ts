import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'p-form-body',
  templateUrl: './form-body.component.html',
  styleUrls: ['./form-body.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormBodyComponent {}
