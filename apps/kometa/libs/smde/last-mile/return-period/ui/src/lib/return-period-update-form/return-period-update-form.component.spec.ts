import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnPeriodUpdateFormComponent } from './return-period-update-form.component';

describe('ReturnPeriodUpdateFormComponent', () => {
  let component: ReturnPeriodUpdateFormComponent;
  let fixture: ComponentFixture<ReturnPeriodUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnPeriodUpdateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnPeriodUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
