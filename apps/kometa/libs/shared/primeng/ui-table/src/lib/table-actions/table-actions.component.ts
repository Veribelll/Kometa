import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'p-table-actions',
  templateUrl: './table-actions.component.html',
  styleUrls: ['./table-actions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableActionsComponent {
  @Input()
  permissionDetails = '';

  @Input()
  permissionUpdate = '';

  @Input()
  permissionDelete = '';

  @Input()
  displayDetails = true;

  @Input()
  displayUpdate = true;

  @Input()
  displayDelete = true;

  @Output()
  details = new EventEmitter();

  @Output()
  update = new EventEmitter();

  @Output()
  delete = new EventEmitter();

  onDetails(): void {
    this.details.emit();
  }

  onUpdate(): void {
    this.update.emit();
  }

  onDelete(): void {
    this.delete.emit();
  }
}
