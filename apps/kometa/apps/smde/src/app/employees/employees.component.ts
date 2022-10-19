import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'kometa-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesComponent {}
