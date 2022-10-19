import { UpdateCompanyInput } from '@kometa/smde/contractor/types';

export type UpdateCompanyFormModel = Omit<UpdateCompanyInput, 'id'>;
