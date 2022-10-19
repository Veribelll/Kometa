import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMileSelectTableComponent } from './last-mile-select-table.component';

describe('LastMileSelectTableComponent', () => {
  let component: LastMileSelectTableComponent;
  let fixture: ComponentFixture<LastMileSelectTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastMileSelectTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastMileSelectTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
