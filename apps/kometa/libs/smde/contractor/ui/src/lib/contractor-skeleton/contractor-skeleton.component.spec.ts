import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorSkeletonComponent } from './contractor-skeleton.component';

describe('ContractorSkeletonComponent', () => {
  let component: ContractorSkeletonComponent;
  let fixture: ComponentFixture<ContractorSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContractorSkeletonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
