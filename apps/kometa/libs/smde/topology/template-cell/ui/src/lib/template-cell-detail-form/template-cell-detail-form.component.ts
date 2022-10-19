import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TemplateCellFragment } from '@kometa/smde/topology/template-cell/types';

@Component({
  selector: 'kometa-template-cell-detail-form',
  templateUrl: './template-cell-detail-form.component.html',
  styleUrls: ['./template-cell-detail-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateCellDetailFormComponent {
  @Input()
  templateCell?: TemplateCellFragment;
}
