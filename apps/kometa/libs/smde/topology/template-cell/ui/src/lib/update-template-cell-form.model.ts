import { UpdateTemplateCellInput } from '@kometa/smde/topology/template-cell/types';

export type UpdateTemplateCellFormModel = Omit<UpdateTemplateCellInput, 'id'>;
