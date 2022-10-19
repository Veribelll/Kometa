import { UpdateLastMileStoragePeriodInput } from '@kometa/smde/last-mile/storage-period/types';

export type UpdateStoragePeriodFormModel = Omit<UpdateLastMileStoragePeriodInput, 'lastMileId'>;
