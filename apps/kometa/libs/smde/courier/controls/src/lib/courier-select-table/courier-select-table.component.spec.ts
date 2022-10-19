import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierSelectTableComponent } from './courier-select-table.component';

describe('CourierSelectTableComponent', () => {
  let component: CourierSelectTableComponent;
  let fixture: ComponentFixture<CourierSelectTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourierSelectTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierSelectTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
