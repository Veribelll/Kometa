import { Inject, Injectable, Optional } from '@angular/core';
import { Scanner } from './scanner.interface';
import { Observable, concat } from 'rxjs';
import { ScannerToken } from './scanner.token';

@Injectable({
  providedIn: 'root',
})
export class ScannerService implements Scanner {
  get scan$(): Observable<string> {
    return concat(...this.scanners.map((x) => x.scan$));
  }

  constructor(
    @Inject(ScannerToken)
    @Optional()
    private readonly scanners: Scanner[]
  ) {}
}
