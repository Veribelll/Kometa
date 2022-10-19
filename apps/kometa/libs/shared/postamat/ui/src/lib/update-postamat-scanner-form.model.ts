import { UpdatePostamatScannerInput } from '@kometa/shared/postamat/types';

export type UpdatePostamatScannerFormModel = Omit<UpdatePostamatScannerInput, 'id'>;
