import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Permission } from '../update-permissions-form/update-permissions-form.component';

type ChangeChildEvent = { permission: Permission; isGranted: boolean };

@Component({
  selector: 'kometa-permission-fields',
  templateUrl: './permission-fields.component.html',
  styleUrls: ['./permission-fields.component.scss'],
})
export class PermissionFieldsComponent {
  @Input()
  formGroup!: FormGroup;

  @Input()
  permissions!: Permission[];

  @Output()
  readonly changeChild = new EventEmitter<ChangeChildEvent>();

  onChange(permission: Permission, { checked }: { checked: boolean }) {
    if (permission.parentName && checked) {
      this.changeChild.emit({ permission, isGranted: checked });
    }

    this.setValueChild(permission, checked);
  }

  onChangeChild({ permission, isGranted }: ChangeChildEvent) {
    for (const parent of this.permissions) {
      if (parent.name === permission.parentName) {
        this.formGroup.controls[parent.name]?.setValue(isGranted);
        this.changeChild.emit({ permission: parent, isGranted });
      }
    }
  }

  setValueChild(permission: Permission, isGranted: boolean) {
    for (const child of permission.children) {
      const control = this.formGroup.controls[child.name];
      if (control.value !== isGranted) {
        this.formGroup.controls[child.name]?.setValue(isGranted);
        this.setValueChild(child, isGranted);
      }
    }
  }
}
