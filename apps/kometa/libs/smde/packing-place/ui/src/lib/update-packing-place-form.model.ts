import { UpdatePackingPlaceInput } from '@kometa/smde/packing-place/types';

export type UpdatePackingPlaceFormModel = Omit<UpdatePackingPlaceInput, 'id'>;
