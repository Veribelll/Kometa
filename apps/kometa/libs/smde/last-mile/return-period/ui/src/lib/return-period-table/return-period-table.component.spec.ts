import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnPeriodTableComponent } from './return-period-table.component';

describe('ReturnPeriodTableComponent', () => {
  let component: ReturnPeriodTableComponent;
  let fixture: ComponentFixture<ReturnPeriodTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnPeriodTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnPeriodTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
