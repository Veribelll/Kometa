import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CompanyDetailFragment } from '@kometa/smde/contractor/types';

@Component({
  selector: 'kometa-company-detail-form',
  templateUrl: './company-detail-form.component.html',
  styleUrls: ['./company-detail-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyDetailFormComponent {
  @Input()
  company?: CompanyDetailFragment;
}
