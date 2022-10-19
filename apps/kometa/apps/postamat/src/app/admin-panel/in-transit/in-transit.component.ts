import { Component } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { CurrentPostamatService } from '@kometa/postamat/core';

@UntilDestroy()
@Component({
  selector: 'kometa-in-transit',
  templateUrl: './in-transit.component.html',
  styleUrls: ['./in-transit.component.scss'],
})
export class InTransitComponent {
  get postamatId$() {
    return this.currentPostamatService.currentId$;
  }

  constructor(private readonly currentPostamatService: CurrentPostamatService) {}
}
