import { UpdateSmsCenterAccountInput } from '@kometa/smde/sms/account/types';

export type UpdateSmsCenterAccountFormModel = Omit<UpdateSmsCenterAccountInput, 'id'>;
