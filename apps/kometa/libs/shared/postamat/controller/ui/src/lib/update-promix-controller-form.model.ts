import { UpdatePromixControllerInput } from '@kometa/shared/postamat/controller/types';

export type UpdatePromixControllerFormModel = Omit<
  UpdatePromixControllerInput,
  'controllerId' | 'postamatId'
>;
