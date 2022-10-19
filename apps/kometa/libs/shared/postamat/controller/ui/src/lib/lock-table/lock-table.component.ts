import { Component, Input, Output, EventEmitter } from '@angular/core';
import { sortBy } from 'lodash';
import { ControllerFragment, LockFragment } from '@kometa/shared/postamat/controller/types';
import { LazyLoadEvent } from 'primeng/api';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'kometa-lock-table',
  templateUrl: './lock-table.component.html',
  styleUrls: ['./lock-table.component.scss'],
})
export class LockTableComponent {
  @Input()
  locks: (LockFragment & { controller: { name: string }; status$: Observable<string> })[] = [];

  @Input()
  loading = false;

  @Input()
  scrollable = false;

  @Input()
  scrollHeight?: string;

  @Output()
  readonly lazyLoad = new EventEmitter<LazyLoadEvent>();

  @Output()
  readonly openLock = new EventEmitter<LockFragment>();

  onLazyLoad(event: LazyLoadEvent): void {
    this.lazyLoad.emit(event);
  }

  onOpen(lock: LockFragment) {
    this.openLock.emit(lock);
  }
}
