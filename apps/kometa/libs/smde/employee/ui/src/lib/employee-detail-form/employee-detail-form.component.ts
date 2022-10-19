import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EmployeeFragment } from '@kometa/smde/employee/types';

@Component({
  selector: 'kometa-employee-detail-form',
  templateUrl: './employee-detail-form.component.html',
  styleUrls: ['./employee-detail-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetailFormComponent {
  @Input()
  employee?: EmployeeFragment;

  get contractors(): string {
    return (this.employee?.contractors?.map((x) => x.name) ?? []).join(', ');
  }

  get roles(): string {
    return (this.employee?.roles?.map((x) => x.name) ?? []).join(', ');
  }
}
