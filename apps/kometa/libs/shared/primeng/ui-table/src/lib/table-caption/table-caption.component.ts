import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { TypedFormControl } from '@kometa/shared/typed-form';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'p-table-caption',
  templateUrl: './table-caption.component.html',
  styleUrls: ['./table-caption.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableCaptionComponent {
  readonly formControl = new TypedFormControl<string>('');

  @Output()
  readonly clear = new EventEmitter();

  @Output()
  readonly changeFilter = new EventEmitter<string | null>();

  constructor() {
    this.formControl.valueChanges
      .pipe(
        tap((value) => {
          this.changeFilter.emit(value);
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  onClear(): void {
    this.formControl.setValue('');
    this.clear.emit();
  }

  onChangeFilter(text: string): void {
    this.changeFilter.emit(text);
  }
}
