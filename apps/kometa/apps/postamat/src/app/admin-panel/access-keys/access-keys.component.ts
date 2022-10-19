import { Component } from '@angular/core';
import { CurrentPostamatService } from '@kometa/postamat/core';

@Component({
  selector: 'kometa-access-keys',
  templateUrl: './access-keys.component.html',
  styleUrls: ['./access-keys.component.scss'],
})
export class AccessKeysComponent {
  get postamatId$() {
    return this.currentPostamatService.currentId$;
  }

  constructor(private readonly currentPostamatService: CurrentPostamatService) {}
}
