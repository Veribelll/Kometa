import { UpdateCellInput } from '@kometa/shared/postamat/cell/types';

export type UpdateCellFormModel = Omit<UpdateCellInput, 'cellId' | 'postamatId'>;
