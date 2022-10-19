import { UpdateEmployeeInput } from '@kometa/smde/employee/types';

export type UpdateEmployeeFormModel = Omit<UpdateEmployeeInput, 'id'>;
