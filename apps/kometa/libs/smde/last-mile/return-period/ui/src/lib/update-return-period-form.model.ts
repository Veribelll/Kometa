import { UpdateLastMileReturnPeriodInput } from '@kometa/smde/last-mile/return-period/types';

export type UpdateReturnPeriodFormModel = Omit<UpdateLastMileReturnPeriodInput, 'lastMileId'>;
