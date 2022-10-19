import { CreateEmployeeInput } from '@kometa/smde/employee/types';

export type CreateEmployeeFormModel = CreateEmployeeInput & {
  passwordConfirm: string;
};
