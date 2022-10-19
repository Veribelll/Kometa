import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnPeriodsPageComponent } from './return-periods-page.component';

describe('ReturnPeriodsPageComponent', () => {
  let component: ReturnPeriodsPageComponent;
  let fixture: ComponentFixture<ReturnPeriodsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnPeriodsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnPeriodsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
