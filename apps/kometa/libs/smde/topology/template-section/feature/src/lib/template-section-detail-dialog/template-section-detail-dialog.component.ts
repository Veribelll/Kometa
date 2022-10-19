import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TemplateSectionFragment } from '@kometa/smde/topology/template-section/types';

@Component({
  selector: 'kometa-template-section-detail-dialog',
  templateUrl: './template-section-detail-dialog.component.html',
  styleUrls: ['./template-section-detail-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateSectionDetailDialogComponent {
  readonly templateSection: TemplateSectionFragment;

  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig
  ) {
    const { templateSection } = this.config.data;

    this.templateSection = templateSection;
  }
}
