import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fio',
})
export class FioPipe implements PipeTransform {
  transform(employee?: { surname: string; name: string; middleName?: string | null }): string {
    const { surname, name, middleName } = employee ?? {};
    return `${surname ?? ''} ${name ?? ''} ${middleName ?? ''}`.trim();
  }
}
