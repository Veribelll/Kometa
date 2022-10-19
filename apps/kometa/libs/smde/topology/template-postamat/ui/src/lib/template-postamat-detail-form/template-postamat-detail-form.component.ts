import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TemplatePostamatFragment } from '@kometa/smde/topology/template-postamat/types';
import { transformTemplatePostamat } from '../transform-template-postamat';
import { Section } from '@kometa/shared/topology/ui';

@Component({
  selector: 'kometa-template-postamat-detail-form',
  templateUrl: './template-postamat-detail-form.component.html',
  styleUrls: ['./template-postamat-detail-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplatePostamatDetailFormComponent {
  @Input()
  templatePostamat?: TemplatePostamatFragment;

  get sections(): Section[] {
    return transformTemplatePostamat(this.templatePostamat);
  }
}
