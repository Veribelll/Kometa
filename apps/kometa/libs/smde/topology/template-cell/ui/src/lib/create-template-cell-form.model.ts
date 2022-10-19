import { CreateTemplateCellInput } from '@kometa/smde/topology/template-cell/types';

export type CreateTemplateCellFormModel = Omit<CreateTemplateCellInput, 'isImage'> & {
  image?: File | null;
};
