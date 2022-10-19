import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMileAccountsUpdateSkeletonComponent } from './last-mile-accounts-update-skeleton.component';

describe('LastMileAccountsUpdateSkeletonComponent', () => {
  let component: LastMileAccountsUpdateSkeletonComponent;
  let fixture: ComponentFixture<LastMileAccountsUpdateSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastMileAccountsUpdateSkeletonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastMileAccountsUpdateSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
