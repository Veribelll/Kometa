import { UpdateEmexOrderInput } from '@kometa/smde/emex/order/types';

export type UpdateEmexOrderFormModel = Omit<UpdateEmexOrderInput, 'id'>;
