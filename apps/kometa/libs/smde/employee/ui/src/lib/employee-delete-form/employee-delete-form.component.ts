import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { EmployeeFragment } from '@kometa/smde/employee/types';

@Component({
  selector: 'kometa-employee-delete-form',
  templateUrl: './employee-delete-form.component.html',
  styleUrls: ['./employee-delete-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDeleteFormComponent {
  @Input()
  employee?: EmployeeFragment;

  @Output()
  readonly delete = new EventEmitter();

  @Output()
  readonly cancel = new EventEmitter();

  onDelete() {
    this.delete.emit();
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
