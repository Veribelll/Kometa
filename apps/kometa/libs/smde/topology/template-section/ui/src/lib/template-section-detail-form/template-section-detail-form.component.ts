import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TemplateSectionFragment } from '@kometa/smde/topology/template-section/types';
import { sortBy } from 'lodash';
import { Cell } from '@kometa/shared/topology/ui';

@Component({
  selector: 'kometa-template-section-detail-form',
  templateUrl: './template-section-detail-form.component.html',
  styleUrls: ['./template-section-detail-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateSectionDetailFormComponent {
  @Input()
  templateSection?: TemplateSectionFragment;

  get cells(): Cell[] {
    return sortBy(this.templateSection?.cells ?? [], (x) => x.position).map(({ templateCell }) => ({
      name: templateCell.name,
      width: templateCell.width,
      height: templateCell.height,
      templateId: templateCell.id,
      imageUrl: templateCell.imageUrl,
      isCell: templateCell.isCell,
    }));
  }
}
