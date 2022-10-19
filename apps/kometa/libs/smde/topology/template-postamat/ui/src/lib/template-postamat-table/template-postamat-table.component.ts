import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { TemplatePostamatFragment } from '@kometa/smde/topology/template-postamat/types';

@Component({
  selector: 'kometa-template-postamat-table',
  templateUrl: './template-postamat-table.component.html',
  styleUrls: ['./template-postamat-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplatePostamatTableComponent {
  @Input()
  templatesPostamat: TemplatePostamatFragment[] = [];

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
  readonly details = new EventEmitter<TemplatePostamatFragment>();

  @Output()
  update = new EventEmitter<TemplatePostamatFragment>();

  @Output()
  delete = new EventEmitter<TemplatePostamatFragment>();

  onLazyLoad(event: LazyLoadEvent): void {
    this.lazyLoad.emit(event);
  }

  onDetails(templatePostamat: TemplatePostamatFragment): void {
    this.details.emit(templatePostamat);
  }

  onUpdate(templatePostamat: TemplatePostamatFragment): void {
    this.update.emit(templatePostamat);
  }

  onDelete(templatePostamat: TemplatePostamatFragment): void {
    this.delete.emit(templatePostamat);
  }
}
