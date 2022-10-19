import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TemplatePostamatFragment } from '@kometa/smde/topology/template-postamat/types';

@Component({
  selector: 'kometa-template-postamat-detail-dialog',
  templateUrl: './template-postamat-detail-dialog.component.html',
  styleUrls: ['./template-postamat-detail-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplatePostamatDetailDialogComponent {
  readonly templatePostamat: TemplatePostamatFragment;

  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    const { templatePostamat } = this.config.data;

    this.templatePostamat = templatePostamat;
  }
}
