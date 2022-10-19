import { CreateTenantInput } from '@kometa/smde/tenant/types';

export type CreateTenantFormModel = Omit<CreateTenantInput, 'contractor'> & {
  adminPasswordConfirm: string;
};
