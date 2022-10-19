import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmexProductDeleteDialogComponent } from './emex-product-delete-dialog.component';

describe('EmexProductDeleteDialogComponent', () => {
  let component: EmexProductDeleteDialogComponent;
  let fixture: ComponentFixture<EmexProductDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmexProductDeleteDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmexProductDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
