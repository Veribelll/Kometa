import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { AssignLockToCellFormModel } from '../assign-lock-to-cell-form.model';
import { TypedFormControl, TypedFormGroup } from '@kometa/shared/typed-form';
import { map, tap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { isEmpty, sortBy } from 'lodash';
import { GetDataForAssignLockToCellQuery } from '@kometa/shared/postamat/cell/types';
import { Validators } from '@angular/forms';

type Controller = GetDataForAssignLockToCellQuery['controllers'][0];

@UntilDestroy()
@Component({
  selector: 'kometa-assign-lock-to-cell-form',
  templateUrl: './assign-lock-to-cell-form.component.html',
  styleUrls: ['./assign-lock-to-cell-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssignLockToCellFormComponent implements OnInit {
  readonly controllerId = new TypedFormControl('', [Validators.required]);
  _controllers: Controller[] = [];

  @Input()
  formGroup!: TypedFormGroup<AssignLockToCellFormModel>;

  @Input()
  get controllers(): Controller[] {
    return this._controllers;
  }
  set controllers(value: Controller[]) {
    this._controllers = value;

    const lockId = this.formGroup.get('lockId').value;
    if (lockId) {
      const controller = value.filter((x) => x.locks.some((l) => l.id === lockId))[0];
      this.controllerId.setValue(controller?.id);
      this.formGroup.setValue({ lockId });
    }
  }

  @Output()
  readonly save = new EventEmitter<AssignLockToCellFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  readonly locks$ = this.controllerId.valueChanges.pipe(
    map((value) => {
      if (!isEmpty(value)) {
        const locks = this.controllers
          .filter((x) => x.id === value)
          .map((x) => x.locks)
          .reduce((a, b) => a.concat(b), []);

        return sortBy(locks, (x) => x.address);
      } else {
        return [];
      }
    })
  );

  ngOnInit() {
    this.controllerId.valueChanges
      .pipe(
        tap(() => {
          this.formGroup.get('lockId').reset();
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { lockId } = this.formGroup.value;

      this.save.emit({ lockId });
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
