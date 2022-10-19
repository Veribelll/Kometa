import { UpdateLastMileAccountsInput } from '@kometa/smde/last-mile/types';

export type UpdateLastMileAccountsFormModel = Omit<UpdateLastMileAccountsInput, 'lastMileId'>;
