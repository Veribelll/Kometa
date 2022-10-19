import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CurrentPostamatService {
  private readonly _currentId$ = new BehaviorSubject<string>(
    localStorage.getItem('postamatIdRelay') ?? ''
  );

  get currentId() {
    return this._currentId$.getValue();
  }

  get currentId$() {
    return this._currentId$.asObservable();
  }

  constructor() {
    this.currentId$.pipe(tap((id) => localStorage.setItem('postamatIdRelay', id))).subscribe();
  }

  change(id: string) {
    this._currentId$.next(id);
  }
}
