import { UpdateLastMileSmsTemplateInput } from '@kometa/smde/last-mile/sms-template/types';

export type UpdateLastMileSmsTemplateFormModel = Omit<
  UpdateLastMileSmsTemplateInput,
  'lastMileId' | 'eventType' | 'typeOrder'
>;
