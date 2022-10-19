import { UpdatePostamatSettingsInput } from '@kometa/shared/postamat/types';

export type UpdatePostamatSettingsFormModel = Omit<UpdatePostamatSettingsInput, 'id'>;
