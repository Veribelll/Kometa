import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostamatFilePrinterSkeletonComponent } from './postamat-file-printer-skeleton.component';

describe('PostamatFilePrinterSkeletonComponent', () => {
  let component: PostamatFilePrinterSkeletonComponent;
  let fixture: ComponentFixture<PostamatFilePrinterSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostamatFilePrinterSkeletonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostamatFilePrinterSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
