import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmexOrderDeleteDialogComponent } from './emex-order-delete-dialog.component';

describe('EmexOrderDeleteDialogComponent', () => {
  let component: EmexOrderDeleteDialogComponent;
  let fixture: ComponentFixture<EmexOrderDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmexOrderDeleteDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmexOrderDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
