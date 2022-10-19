import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { TemplateSectionFragment } from '@kometa/smde/topology/template-section/types';

@Component({
  selector: 'kometa-template-section-table',
  templateUrl: './template-section-table.component.html',
  styleUrls: ['./template-section-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateSectionTableComponent {
  @Input()
  templatesSection: TemplateSectionFragment[] = [];

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
  readonly details = new EventEmitter<TemplateSectionFragment>();

  @Output()
  update = new EventEmitter<TemplateSectionFragment>();

  @Output()
  delete = new EventEmitter<TemplateSectionFragment>();

  onLazyLoad(event: LazyLoadEvent): void {
    this.lazyLoad.emit(event);
  }

  onDetails(templateSection: TemplateSectionFragment): void {
    this.details.emit(templateSection);
  }

  onUpdate(templateSection: TemplateSectionFragment): void {
    this.update.emit(templateSection);
  }

  onDelete(templateSection: TemplateSectionFragment): void {
    this.delete.emit(templateSection);
  }
}
