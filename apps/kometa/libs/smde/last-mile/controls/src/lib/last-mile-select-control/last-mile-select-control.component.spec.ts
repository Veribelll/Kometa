import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMileSelectControlComponent } from './last-mile-select-control.component';

describe('LastMileSelectControlComponent', () => {
  let component: LastMileSelectControlComponent;
  let fixture: ComponentFixture<LastMileSelectControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastMileSelectControlComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastMileSelectControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
