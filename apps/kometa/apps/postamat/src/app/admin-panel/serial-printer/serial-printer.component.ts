import { Component } from '@angular/core';
import { CurrentPostamatService } from '@kometa/postamat/core';

@Component({
  selector: 'kometa-serial-printer',
  templateUrl: './serial-printer.component.html',
  styleUrls: ['./serial-printer.component.scss'],
})
export class SerialPrinterComponent {
  get postamatId$() {
    return this.currentPostamatService.currentId$;
  }

  constructor(private readonly currentPostamatService: CurrentPostamatService) {}
}
