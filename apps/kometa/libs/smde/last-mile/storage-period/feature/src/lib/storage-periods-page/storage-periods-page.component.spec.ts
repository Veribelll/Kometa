import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoragePeriodsPageComponent } from './storage-periods-page.component';

describe('StoragePeriodsPageComponent', () => {
  let component: StoragePeriodsPageComponent;
  let fixture: ComponentFixture<StoragePeriodsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoragePeriodsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoragePeriodsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
