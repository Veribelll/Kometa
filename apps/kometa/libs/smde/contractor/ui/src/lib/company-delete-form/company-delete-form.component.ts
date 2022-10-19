import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { CompanyFragment } from '@kometa/smde/contractor/types';

@Component({
  selector: 'kometa-company-delete-form',
  templateUrl: './company-delete-form.component.html',
  styleUrls: ['./company-delete-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyDeleteFormComponent {
  @Input()
  company?: CompanyFragment;

  @Output()
  readonly delete = new EventEmitter();

  @Output()
  readonly cancel = new EventEmitter();

  onDelete() {
    this.delete.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}
