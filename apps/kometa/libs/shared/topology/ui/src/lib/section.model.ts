import { Cell } from './cell.model';

export type Section = {
  id?: string;
  name: string;
  templateId?: string;
  cells: Cell[];
};
