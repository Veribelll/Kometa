import { UpdateTenantInput } from '@kometa/smde/tenant/types';

export type UpdateTenantFormModel = Omit<UpdateTenantInput, 'id'>;
