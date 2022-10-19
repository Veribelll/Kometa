import { Injectable } from '@angular/core';
import type * as SerialPortPack from 'serialport';

@Injectable({
  providedIn: 'root',
})
export class ElectronService {
  readonly serialPortPack?: typeof SerialPortPack;

  constructor() {
    if (this.isElectron) {
      this.serialPortPack = window.require('serialport');
    }
  }

  get isElectron(): boolean {
    return !!(window && window.process && window.process.platform);
  }
}
