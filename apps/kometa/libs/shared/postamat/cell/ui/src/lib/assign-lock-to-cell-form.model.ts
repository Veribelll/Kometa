import { PostamatAssignLockToCellInput } from '@kometa/shared/postamat/cell/types';

export type AssignLockToCellFormModel = Omit<
  PostamatAssignLockToCellInput,
  'postamatId' | 'cellId'
>;
