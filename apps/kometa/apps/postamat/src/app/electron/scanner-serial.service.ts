import { Scanner } from '@kometa/postamat/feature-scanner';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ElectronService } from './electron.service';

@Injectable()
export class ScannerSerialService implements Scanner {
  private readonly _scan$ = new Subject<string>();

  get scan$(): Observable<string> {
    return this._scan$.asObservable();
  }

  constructor(private readonly electron: ElectronService) {}
}
