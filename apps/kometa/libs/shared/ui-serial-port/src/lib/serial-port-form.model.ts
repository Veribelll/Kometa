export enum Parity {
  Even = 'EVEN',
  Mark = 'MARK',
  None = 'NONE',
  Odd = 'ODD',
  Space = 'SPACE',
}

export enum StopBits {
  None = 'NONE',
  One = 'ONE',
  OnePointFive = 'ONE_POINT_FIVE',
  Two = 'TWO',
}

export type SerialPortFormModel = {
  baudRate: number;
  dataBits: number;
  parity: Parity;
  portName: string;
  stopBits: StopBits;
};
