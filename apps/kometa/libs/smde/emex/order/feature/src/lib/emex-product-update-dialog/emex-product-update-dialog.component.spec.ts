import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmexProductUpdateDialogComponent } from './emex-product-update-dialog.component';

describe('EmexProductUpdateDialogComponent', () => {
  let component: EmexProductUpdateDialogComponent;
  let fixture: ComponentFixture<EmexProductUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmexProductUpdateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmexProductUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
