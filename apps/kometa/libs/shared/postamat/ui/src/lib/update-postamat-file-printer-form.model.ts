import { UpdatePostamatFilePrinterInput } from '@kometa/shared/postamat/types';

export type UpdatePostamatFilePrinterFormModel = Omit<UpdatePostamatFilePrinterInput, 'postamatId'>;
