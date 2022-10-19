import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TypedFormBuilder, TypedFormGroup } from '@kometa/shared/typed-form';
import { BehaviorSubject, map, tap } from 'rxjs';
import {
  PermissionListFragment,
  UpdatePermissionDtoInput,
} from '@kometa/smde/permission/types';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

type PermissionsGroup = {
  name: string;
  displayName: string;
  permissions: Permission[];
};

export type Permission = {
  name: string;
  displayName: string;
  children: Permission[];
  parentName?: string | null | undefined;
  isGranted: boolean;
};

@UntilDestroy()
@Component({
  selector: 'kometa-update-permissions-form',
  templateUrl: './update-permissions-form.component.html',
  styleUrls: ['./update-permissions-form.component.scss'],
})
export class UpdatePermissionsFormComponent {
  readonly formGroup: TypedFormGroup<Record<string, boolean>>;
  readonly groups$ = new BehaviorSubject<PermissionsGroup[]>([]);
  readonly selectGroup$ = new BehaviorSubject<PermissionsGroup | null>(null);
  readonly permissions$ = this.groups$.pipe(
    map((arr) => arr.map((g) => g.permissions).reduce((a, b) => [...a, ...b], []))
  );

  @Input()
  set permissions(value: PermissionListFragment) {
    if (!value) {
      return;
    }

    this.groups$.next(
      value.groups.map((x) => ({
        name: x.name,
        displayName: x.displayName,
        permissions: this.setChildren(x.permissions),
      }))
    );
  }

  @Output()
  readonly save = new EventEmitter<UpdatePermissionDtoInput[]>();

  @Output()
  readonly cancel = new EventEmitter();

  constructor(private readonly fb: TypedFormBuilder) {
    this.formGroup = this.fb.group({});

    this.permissions$
      .pipe(
        tap((permissions) => this.updateFormGroup(permissions)),
        untilDestroyed(this)
      )
      .subscribe();
  }

  onSelectGroup(group: PermissionsGroup) {
    this.selectGroup$.next(group);
  }

  onSelectAllByGroup() {
    const selectGroup = this.selectGroup$.value;

    if (!selectGroup) {
      return;
    }
  }

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const permissions: UpdatePermissionDtoInput[] = [];

      for (const key in this.formGroup.value) {
        const isGranted = this.formGroup.value[key];
        permissions.push({ name: key, isGranted });
      }

      this.save.emit(permissions);
    }
  }

  onCancel() {
    this.cancel.emit();
  }

  private updateFormGroup(permissions: Permission[]) {
    for (const permission of permissions) {
      this.formGroup.addControl(permission.name, this.fb.control(permission.isGranted));
      for (const child of permission.children) {
        this.formGroup.addControl(child.name, this.fb.control(child.isGranted));
        this.updateFormGroup(child.children);
      }
    }
  }

  private setChildren(
    permissions: Omit<Permission, 'children'>[],
    parentName: string | null = null
  ): Permission[] {
    const arr: Permission[] = [];

    for (const permission of permissions) {
      if (permission.parentName === parentName) {
        const children = permissions
          .filter((x) => x.parentName === permission.name)
          .map((x) => ({ ...x, children: [] } as Permission));

        for (const child of children) {
          child.children = this.setChildren(permissions, child.name);
        }

        arr.push({ ...permission, children });
      }
    }

    return arr;
  }
}
