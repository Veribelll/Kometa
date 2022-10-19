import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { ApplicationConfigurationService } from './application-configuration.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CurrentContractorService {
  private readonly _currentId$ = new BehaviorSubject<string | null>(
    localStorage.getItem('contractorId')
  );

  get currentId() {
    return this._currentId$.getValue();
  }

  get currentId$() {
    return this._currentId$.asObservable();
  }

  get current$() {
    return this.applicationConfigurationService.currentContractor$;
  }

  get selectableContractors$() {
    return this.applicationConfigurationService.selectableContractors$;
  }

  constructor(private readonly applicationConfigurationService: ApplicationConfigurationService) {
    this.currentId$.pipe(tap((id) => localStorage.setItem('contractorId', id ?? ''))).subscribe();
  }

  async setId(id: string | null): Promise<void> {
    this._currentId$.next(id);
    await lastValueFrom(this.applicationConfigurationService.get());
  }
}
