import { CreateAccessKeyInput } from '@kometa/shared/last-mile/access-key/types';

export type CreateAccessKeyFormModel = Omit<CreateAccessKeyInput, 'lastMileId'>;
