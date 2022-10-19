import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoragePeriodUpdateFormComponent } from './storage-period-update-form.component';

describe('StoragePeriodUpdateFormComponent', () => {
  let component: StoragePeriodUpdateFormComponent;
  let fixture: ComponentFixture<StoragePeriodUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoragePeriodUpdateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoragePeriodUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
