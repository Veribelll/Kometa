import { Section } from '@kometa/shared/topology/ui';
import { TemplatePostamatFragment } from '@kometa/smde/topology/template-postamat/types';
import { sortBy } from 'lodash';

export function transformTemplatePostamat(template?: TemplatePostamatFragment): Section[] {
  return sortBy(template?.sections ?? [], (x) => x.position).map(({ templateSection }) => ({
    name: templateSection.name,
    cells: sortBy(templateSection.cells, (z) => z.position).map(({ templateCell }) => ({
      name: templateCell.name,
      width: templateCell.width,
      height: templateCell.height,
      isCell: templateCell.isCell,
      templateId: templateCell.id,
      size: templateCell.size,
      imageUrl: templateCell.imageUrl,
    })),
    templateId: templateSection.id,
  }));
}
