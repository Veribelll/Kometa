import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierSelectControlComponent } from './courier-select-control.component';

describe('CourierSelectControlComponent', () => {
  let component: CourierSelectControlComponent;
  let fixture: ComponentFixture<CourierSelectControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourierSelectControlComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierSelectControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
