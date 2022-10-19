import { UpdateShipmentRequestInput } from '@kometa/smde/shipment-request/types';

export type UpdateShipmentRequestFormModel = Omit<UpdateShipmentRequestInput, 'id'>;
