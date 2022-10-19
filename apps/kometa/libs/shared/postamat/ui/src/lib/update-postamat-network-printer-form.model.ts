import { UpdatePostamatNetworkPrinterInput } from '@kometa/shared/postamat/types';

export type UpdatePostamatNetworkPrinterFormModel = Omit<
  UpdatePostamatNetworkPrinterInput,
  'postamatId'
>;
