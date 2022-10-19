import { UpdatePostamatInput } from '@kometa/smde/postamat/types';

export type UpdatePostamatFormModel = Omit<UpdatePostamatInput, 'id'>;
