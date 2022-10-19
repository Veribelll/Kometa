import { BehaviorSubject } from 'rxjs';

export class PromixLockDriver {
  public readonly isOpen$ = new BehaviorSubject<boolean>(false);
  public readonly group: number;
  public readonly number: number;

  constructor(
    public readonly lockId: string,
    public readonly address: string,
    public readonly cellId?: string
  ) {
    const split = address.split('.');
    this.group = Number(split[0]) ?? 0;
    this.number = Number(split[1]) ?? 0;
  }

  public update(b0: number, b1: number, b2: number) {
    if (b0 !== this.group) {
      return;
    }

    const bin = this.dec2bin(b1) + this.dec2bin(b2);
    const state = bin.slice(this.number * 2, this.number * 2 + 2);

    this.isOpen$.next(state == '11');
  }

  private dec2bin(b: number): string {
    return (b >>> 0).toString(2);
  }
}
