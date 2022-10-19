import { PermissionService } from '../services';
import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil, tap } from 'rxjs/operators';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[permission]',
})
export class PermissionDirective implements OnInit, OnDestroy {
  private readonly destroy = new Subject();

  @Input('permission') condition = '';

  constructor(
    private elRef: ElementRef<HTMLElement>,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private permissionService: PermissionService
  ) {}

  ngOnInit(): void {
    this.permissionService
      .getGrantedPolicy$(this.condition)
      .pipe(
        distinctUntilChanged(),
        tap((isGranted) => {
          if (isGranted) {
            this.viewContainer.createEmbeddedView(this.templateRef);
          } else {
            this.viewContainer.clear();
          }
        }),
        takeUntil(this.destroy)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy?.complete();
  }
}
