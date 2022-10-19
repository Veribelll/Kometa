import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmexProductCreateDialogComponent } from './emex-product-create-dialog.component';

describe('EmexProductCreateDialogComponent', () => {
  let component: EmexProductCreateDialogComponent;
  let fixture: ComponentFixture<EmexProductCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmexProductCreateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmexProductCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
