import { UpdatePostamatSerialPrinterInput } from '@kometa/shared/postamat/types';

export type UpdatePostamatSerialPrinterFormModel = Omit<
  UpdatePostamatSerialPrinterInput,
  'postamatId'
>;
