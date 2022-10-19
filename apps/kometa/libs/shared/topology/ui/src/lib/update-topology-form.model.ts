import { UpdateTopologyInput } from '@kometa/shared/topology/types';

export type UpdateTopologyFormModel = Omit<UpdateTopologyInput, 'postamatId'>;
