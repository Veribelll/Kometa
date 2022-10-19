import { isNaN } from 'lodash';

export function enumToArray(e: any): { id: number | string; name: string }[] {
  return Object.keys(e)
    .filter((x) => !isNaN(x))
    .map((v) => ({ id: e[v], name: v }));
}
