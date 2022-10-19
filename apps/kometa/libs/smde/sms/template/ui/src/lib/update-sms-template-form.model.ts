import { UpdateSmsTemplateInput } from '@kometa/smde/sms/template/types';

export type UpdateSmsTemplateFormModel = Omit<UpdateSmsTemplateInput, 'id'>;
