import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'kometa-templates-cell',
  templateUrl: './templates-cell.component.html',
  styleUrls: ['./templates-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplatesCellComponent {}
