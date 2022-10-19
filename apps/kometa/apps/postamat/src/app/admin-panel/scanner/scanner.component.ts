import { Component } from '@angular/core';
import { CurrentPostamatService } from '@kometa/postamat/core';

@Component({
  selector: 'kometa-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss'],
})
export class ScannerComponent {
  get postamatId$() {
    return this.currentPostamatService.currentId$;
  }

  constructor(private readonly currentPostamatService: CurrentPostamatService) {}
}
