import { CellDisplayFragment } from '@kometa/shared/topology/types';
import { Section } from '@kometa/shared/topology/ui';
import { groupBy, sortBy } from 'lodash';

export function transformCellDisplaysToSections(displays: CellDisplayFragment[]): Section[] {
  const sections: Section[] = [];
  const group = groupBy(
    sortBy(displays, ({ x }) => x),
    'x'
  );

  const id = () => Math.random().toString(16);
  let i = 1;

  for (const key in group) {
    const arr = group[key];

    sections.push({
      id: id(),
      name: i.toString(),
      cells: sortBy(arr, ({ y }) => y).map(({ cellId, templateCell }) => ({
        id: id(),
        name: templateCell.name,
        width: templateCell.width,
        height: templateCell.height,
        imageUrl: templateCell.imageUrl,
        isCell: templateCell.isCell,
        templateId: templateCell.id,
        cellId,
      })),
    });

    i++;
  }

  return sections;
}
