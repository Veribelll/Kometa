import { UpdateReturnRequestInput } from '@kometa/smde/return-request/types';

export type UpdateReturnRequestFormModel = Omit<UpdateReturnRequestInput, 'id'>;
