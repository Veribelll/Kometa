export type Cell = {
  id?: string;
  name: string;
  width: number;
  height: number;
  isCell: boolean;
  templateId: string;
  size?: { id: string; name: string } | null;
  imageUrl?: string | null;
  cellId?: string | null;
  disable?: boolean;
};
