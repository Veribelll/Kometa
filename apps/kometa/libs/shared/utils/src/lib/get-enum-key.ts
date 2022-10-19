import { isNaN, first } from 'lodash';

export function getEnumKey(value: string, e: any): string {
  return first(Object.keys(e).filter((x) => !isNaN(x) && e[x] === value)) as string;
}
