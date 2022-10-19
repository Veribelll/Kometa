import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IndividualEntrepreneurDetailFragment } from '@kometa/smde/contractor/types';

@Component({
  selector: 'kometa-individual-entrepreneur-detail-form',
  templateUrl: './individual-entrepreneur-detail-form.component.html',
  styleUrls: ['./individual-entrepreneur-detail-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndividualEntrepreneurDetailFormComponent {
  @Input()
  individualEntrepreneur?: IndividualEntrepreneurDetailFragment;
}
