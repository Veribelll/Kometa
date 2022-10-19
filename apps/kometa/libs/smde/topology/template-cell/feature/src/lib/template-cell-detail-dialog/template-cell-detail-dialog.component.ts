import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TemplateCellFragment } from '@kometa/smde/topology/template-cell/types';

@Component({
  selector: 'kometa-template-cell-detail-dialog',
  templateUrl: './template-cell-detail-dialog.component.html',
  styleUrls: ['./template-cell-detail-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateCellDetailDialogComponent {
  readonly templateCell: TemplateCellFragment;

  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    const { templateCell } = this.config.data;

    this.templateCell = templateCell;
  }
}
