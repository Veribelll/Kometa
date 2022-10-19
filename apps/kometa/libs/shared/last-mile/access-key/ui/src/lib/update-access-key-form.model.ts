import { UpdateAccessKeyInput } from '@kometa/shared/last-mile/access-key/types';

export type UpdateAccessKeyFormModel = Omit<UpdateAccessKeyInput, 'id' | 'lastMileId'>;
