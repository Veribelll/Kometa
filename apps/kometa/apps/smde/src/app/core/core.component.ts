import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'kometa-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreComponent {}
