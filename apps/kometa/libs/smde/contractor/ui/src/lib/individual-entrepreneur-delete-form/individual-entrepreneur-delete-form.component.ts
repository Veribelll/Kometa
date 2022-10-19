import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { IndividualEntrepreneurFragment } from '@kometa/smde/contractor/types';

@Component({
  selector: 'kometa-individual-entrepreneur-delete-form',
  templateUrl: './individual-entrepreneur-delete-form.component.html',
  styleUrls: ['./individual-entrepreneur-delete-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndividualEntrepreneurDeleteFormComponent {
  @Input()
  individualEntrepreneur?: IndividualEntrepreneurFragment;

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
