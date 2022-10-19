import { CreatePromixControllerInput } from '@kometa/shared/postamat/controller/types';

export type CreatePromixControllerFormModel = Omit<CreatePromixControllerInput, 'postamatId'>;
