export type CreateTemplateSectionFormModel = {
  name: string;
  cells: { position: number; templateCellId: string }[];
};
