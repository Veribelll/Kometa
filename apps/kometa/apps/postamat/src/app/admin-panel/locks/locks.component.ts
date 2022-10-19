import { Component } from '@angular/core';
import { CurrentPostamatService } from '@kometa/postamat/core';

@Component({
  selector: 'kometa-locks',
  templateUrl: './locks.component.html',
  styleUrls: ['./locks.component.scss'],
})
export class LocksComponent {
  get postamatId$() {
    return this.currentPostamatService.currentId$;
  }

  constructor(private readonly currentPostamatService: CurrentPostamatService) {}
}
