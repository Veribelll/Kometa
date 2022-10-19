import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { TemplateCellFragment } from '@kometa/smde/topology/template-cell/types';

@Component({
  selector: 'kometa-template-cell-table',
  templateUrl: './template-cell-table.component.html',
  styleUrls: ['./template-cell-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateCellTableComponent {
  @Input()
  templatesCell: TemplateCellFragment[] = [];

  @Input()
  loading = false;

  @Input()
  totalRecords = 0;

  @Input()
  permissionDetails = '';

  @Input()
  permissionUpdate = '';

  @Input()
  permissionDelete = '';

  @Output()
  readonly lazyLoad = new EventEmitter<LazyLoadEvent>();

  @Output()
  readonly details = new EventEmitter<TemplateCellFragment>();

  @Output()
  update = new EventEmitter<TemplateCellFragment>();

  @Output()
  delete = new EventEmitter<TemplateCellFragment>();

  onLazyLoad(event: LazyLoadEvent): void {
    this.lazyLoad.emit(event);
  }

  onDetails(templateCell: TemplateCellFragment): void {
    this.details.emit(templateCell);
  }

  onUpdate(templateCell: TemplateCellFragment): void {
    this.update.emit(templateCell);
  }

  onDelete(templateCell: TemplateCellFragment): void {
    this.delete.emit(templateCell);
  }
}
