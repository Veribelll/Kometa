import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostamatScannerSkeletonComponent } from './postamat-scanner-skeleton.component';

describe('PostamatScannerSkeletonComponent', () => {
  let component: PostamatScannerSkeletonComponent;
  let fixture: ComponentFixture<PostamatScannerSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostamatScannerSkeletonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostamatScannerSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
