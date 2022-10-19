import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'kometa-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TenantsComponent {}
