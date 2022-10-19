import { UpdateEmexAccountInput } from '@kometa/smde/emex/account/types';

export type UpdateEmexAccountFormModel = Omit<UpdateEmexAccountInput, 'id'>;
