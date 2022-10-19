import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnPeriodsPageDialogComponent } from './return-periods-page-dialog.component';

describe('ReturnPeriodsPageDialogComponent', () => {
  let component: ReturnPeriodsPageDialogComponent;
  let fixture: ComponentFixture<ReturnPeriodsPageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnPeriodsPageDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnPeriodsPageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
