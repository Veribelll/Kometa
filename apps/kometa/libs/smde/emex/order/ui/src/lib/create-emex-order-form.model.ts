import { CreateEmexOrderInput } from '@kometa/smde/emex/order/types';

export type CreateEmexOrderFormModel = Omit<CreateEmexOrderInput, 'products'>;
