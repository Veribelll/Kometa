import {
  Directive,
  ElementRef,
  Injector,
  OnInit,
  Renderer2,
  ViewContainerRef,
  Optional,
} from '@angular/core';
import { KeyboardButtonComponent } from './keyboard-button/keyboard-button.component';
import { DialogService } from 'primeng/dynamicdialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { take, tap } from 'rxjs';
import { KeyboardDialogComponent } from './keyboard-dialog/keyboard-dialog.component';
import { FormControlDirective, NgControl } from '@angular/forms';

@UntilDestroy()
@Directive({
  selector: 'input[pKeyboard]',
  providers: [DialogService],
})
export class KeyboardDirective implements OnInit {
  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2,
    private readonly injector: Injector,
    private readonly viewContainerRef: ViewContainerRef,
    private readonly dialogService: DialogService,
    @Optional()
    private readonly ngControl?: NgControl
  ) {}

  ngOnInit() {
    const div = this.renderer.createElement('div');
    const parent = this.elementRef.nativeElement.parentNode;
    const reference = this.elementRef.nativeElement;
    const button = this.viewContainerRef.createComponent(KeyboardButtonComponent);

    const fontSize = window.getComputedStyle(reference, null).getPropertyValue('font-size');

    button.instance.fontSize = fontSize;
    button.instance.keyboard
      .pipe(
        tap(() => this.open()),
        untilDestroyed(this)
      )
      .subscribe();

    this.renderer.addClass(div, 'flex');
    this.renderer.addClass(div, 'flex-row');

    this.renderer.insertBefore(parent, div, reference);
    this.renderer.appendChild(div, this.elementRef.nativeElement);
    this.renderer.appendChild(div, button.location.nativeElement);
  }

  private open() {
    const dialog = this.dialogService.open(KeyboardDialogComponent, {
      showHeader: false,
      width: '1200px',
    });

    dialog.onClose
      .pipe(
        take(1),
        tap((text) => {
          if (text) {
            if (this.ngControl?.control) {
              this.ngControl.control.setValue(text);
            } else if (this.ngControl instanceof FormControlDirective) {
              this.ngControl.form.setValue(text);
            } else {
              this.renderer.setProperty(this.elementRef.nativeElement, 'value', text);
            }
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
