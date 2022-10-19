import { tap } from 'rxjs/operators';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TypedFormGroup } from '@kometa/shared/typed-form';
import { CreateTemplateCellFormModel } from '../create-template-cell-form.model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'kometa-template-cell-create-form',
  templateUrl: './template-cell-create-form.component.html',
  styleUrls: ['./template-cell-create-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateCellCreateFormComponent implements OnInit {
  @Input()
  formGroup!: TypedFormGroup<CreateTemplateCellFormModel>;

  @Input()
  sizes: { id: string; name: string }[] = [];

  @Output()
  readonly save = new EventEmitter<CreateTemplateCellFormModel>();

  @Output()
  readonly cancel = new EventEmitter();

  get isCellControl(): FormControl {
    return this.formGroup.get('isCell') as FormControl;
  }
  get nameControl(): FormControl {
    return this.formGroup.get('name') as FormControl;
  }
  get widthControl(): FormControl {
    return this.formGroup.get('width') as FormControl;
  }
  get heightControl(): FormControl {
    return this.formGroup.get('height') as FormControl;
  }
  get sizeIdControl(): FormControl {
    return this.formGroup.get('sizeId') as FormControl;
  }
  get imageControl(): FormControl {
    return this.formGroup.get('image') as FormControl;
  }

  get imageUrl() {
    return (this.imageControl.value as any)?.objectURL;
  }

  ngOnInit() {
    this.isCellControl.valueChanges
      .pipe(
        tap((isCell) => {
          this.sizeIdControl.setValidators(isCell ? [Validators.required] : []);
          this.sizeIdControl.setValue(null);
          this.formGroup.updateValueAndValidity();
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  onSelectImage({ currentFiles }: any) {
    const image = currentFiles[0] as File;
    this.imageControl.setValue(image);
  }

  onRemoveImage() {
    this.imageControl.setValue(null);
  }

  onSave() {
    if (this.formGroup.valid && this.formGroup.value) {
      const { isCell, name, height, width, sizeId, image } = this.formGroup.value;

      this.save.emit({
        isCell,
        name,
        height,
        width,
        sizeId,
        image,
      });
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
