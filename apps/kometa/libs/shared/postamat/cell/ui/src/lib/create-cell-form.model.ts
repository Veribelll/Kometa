import { CreateCellInput } from '@kometa/shared/postamat/cell/types';

export type CreateCellFormModel = Omit<CreateCellInput, 'postamatId'>;
