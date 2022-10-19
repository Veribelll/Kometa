import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CurrentPostamatService } from '@kometa/postamat/core';
import { ElectronService } from '../../electron/electron.service';
import { from, map, Observable } from 'rxjs';

@Component({
  selector: 'kometa-controllers',
  templateUrl: './controllers.component.html',
  styleUrls: ['./controllers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControllersComponent {
  get postamatId$() {
    return this.currentPostamatService.currentId$;
  }

  readonly ports$?: Observable<string[]>;

  constructor(
    private readonly currentPostamatService: CurrentPostamatService,
    private readonly electronService: ElectronService
  ) {
    if (this.electronService.serialPortPack) {
      const pack = this.electronService.serialPortPack;
      this.ports$ = from(pack.SerialPort.list()).pipe(map((x) => x.map((p) => p.path).sort()));
    }
  }
}
