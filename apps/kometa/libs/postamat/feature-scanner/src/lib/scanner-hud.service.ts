import { Injectable } from '@angular/core';
import { Scanner } from './scanner.interface';
import { fromEvent, Observable, filter, buffer, map } from 'rxjs';

@Injectable()
export class ScannerHudService implements Scanner {
  private readonly enter$ = fromEvent<KeyboardEvent>(document, 'keydown').pipe(
    filter(({ key }) => key === 'Enter')
  );

  get scan$(): Observable<string> {
    return fromEvent<KeyboardEvent>(document, 'keydown').pipe(
      filter(({ target }) => (target as HTMLElement).tagName !== 'INPUT'),
      filter(({ key }) => /^[\w]$/.test(key)),
      map(({ key }) => key),
      buffer(this.enter$),
      map((keys) => keys.join('')),
      filter((key) => key !== '')
    );
  }
}
