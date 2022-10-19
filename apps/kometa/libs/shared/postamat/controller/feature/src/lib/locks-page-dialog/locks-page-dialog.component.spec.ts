import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocksPageDialogComponent } from './locks-page-dialog.component';

describe('LocksPageDialogComponent', () => {
  let component: LocksPageDialogComponent;
  let fixture: ComponentFixture<LocksPageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocksPageDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocksPageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
