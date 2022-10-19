import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmexOrderCreateDialogComponent } from './emex-order-create-dialog.component';

describe('EmexOrderCreateDialogComponent', () => {
  let component: EmexOrderCreateDialogComponent;
  let fixture: ComponentFixture<EmexOrderCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmexOrderCreateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmexOrderCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
