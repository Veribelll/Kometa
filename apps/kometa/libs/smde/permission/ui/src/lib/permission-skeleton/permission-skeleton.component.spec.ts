import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionSkeletonComponent } from './permission-skeleton.component';

describe('PermissionSkeletonComponent', () => {
  let component: PermissionSkeletonComponent;
  let fixture: ComponentFixture<PermissionSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PermissionSkeletonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
