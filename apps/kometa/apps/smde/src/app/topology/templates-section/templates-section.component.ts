import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'kometa-templates-section',
  templateUrl: './templates-section.component.html',
  styleUrls: ['./templates-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplatesSectionComponent {}
