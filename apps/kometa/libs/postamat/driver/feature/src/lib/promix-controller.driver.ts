import { PromixLockDriver } from './promix-lock.driver';
import { ControllerDriver } from '@kometa/shared/driver/feature';
import { GetControllersForDriverQuery } from '@kometa/shared/driver/types';
import { find, max } from 'lodash';
import { Observable, of } from 'rxjs';
import type { SerialPort } from 'serialport';
import type * as SerialPortPack from 'serialport';

type Controller = GetControllersForDriverQuery['controllers'][0];

export class PromixControllerDriver extends ControllerDriver {
  private readonly locks: PromixLockDriver[] = [];

  override get type(): NonNullable<Controller['__typename']> {
    return 'PromixController';
  }

  private serialPort!: SerialPort;
  private quantity!: number;

  constructor(private readonly pack: typeof SerialPortPack) {
    super();
  }

  override init(controller: Controller): Promise<void> {
    const { SerialPort, ByteLengthParser } = this.pack;

    this.quantity = (max(controller.locks.map((x) => Number(x.address.split('.')[0]))) ?? 0) + 1;
    const settings = controller.settings;

    for (const lock of controller.locks) {
      this.locks.push(new PromixLockDriver(lock.id, lock.address, lock.cell?.id));
    }

    this.serialPort = new SerialPort({
      path: settings.portName,
      baudRate: settings.baudRate,
      parity: 'none',
      dataBits: 8,
      stopBits: 1,
    });

    const byte4Parser = new ByteLengthParser({ length: 4 });
    byte4Parser.on('data', (data: Buffer) => {
      if (data[0] === 0x89) {
        for (const lock of this.locks) {
          lock.update(data[1], data[2], data[3]);
        }
      }
    });
    this.serialPort.pipe(byte4Parser);

    this.serialPort.write([0xff, 0xff, 0xff, 0xff, 0x9a, 0xbf]);
    this.serialPort.drain();
    this.serialPort.write([0xff, 0xff, 0xff, 0xff, 0x9a, 0xb1]);
    this.serialPort.drain();

    this.serialPort.on('error', function (err) {
      console.log('Error: ', err.message);
    });

    setInterval(() => this.updateLocks(), 1000);

    return Promise.resolve(undefined);
  }

  public open(param: { address: string }): Observable<boolean>;
  public open(param: { lockId: string }): Observable<boolean>;
  public open(param: { cellId: string }): Observable<boolean>;
  public open({
    address,
    lockId,
    cellId,
  }: {
    address?: string;
    lockId?: string;
    cellId?: string;
  }): Observable<boolean> {
    if (address) {
      return this.openByAddress(address);
    }

    if (lockId) {
      return this.openByLockId(lockId);
    }

    if (cellId) {
      return this.openByCellId(cellId);
    }

    return of(false);
  }

  public isOpen(param: { address: string }): Observable<boolean>;
  public isOpen(param: { lockId: string }): Observable<boolean>;
  public isOpen(param: { cellId: string }): Observable<boolean>;
  public isOpen({
    address,
    lockId,
    cellId,
  }: {
    address?: string;
    lockId?: string;
    cellId?: string;
  }): Observable<boolean> {
    if (address) {
      return this.isOpenByAddress(address);
    }

    if (lockId) {
      return this.isOpenByLockId(lockId);
    }

    if (cellId) {
      return this.isOpenByCellId(cellId);
    }

    return of(false);
  }

  private openByAddress(address: string): Observable<boolean> {
    return of(true);
  }

  private openByLockId(lockId: string): Observable<boolean> {
    return of(true);
  }

  private openByCellId(cellId: string): Observable<boolean> {
    return of(true);
  }

  private isOpenByAddress(address: string): Observable<boolean> {
    const lock = find(this.locks, (l) => l.address === address);
    return lock?.isOpen$.asObservable() ?? of(true);
  }

  private isOpenByLockId(lockId: string): Observable<boolean> {
    const lock = find(this.locks, (l) => l.lockId === lockId);
    return lock?.isOpen$.asObservable() ?? of(true);
  }

  private isOpenByCellId(cellId: string): Observable<boolean> {
    const lock = find(this.locks, (l) => l.cellId === cellId);
    return lock?.isOpen$.asObservable() ?? of(true);
  }

  private updateLocks() {
    for (let i = 0; i < this.quantity; i++) {
      const req = [0x88, i, 0x04, i, i];
      this.serialPort.write(req);
      this.serialPort.drain();
    }
  }
}
