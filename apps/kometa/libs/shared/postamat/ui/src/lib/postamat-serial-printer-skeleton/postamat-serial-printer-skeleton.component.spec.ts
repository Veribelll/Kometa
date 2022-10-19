import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostamatSerialPrinterSkeletonComponent } from './postamat-serial-printer-skeleton.component';

describe('PostamatSerialPrinterSkeletonComponent', () => {
  let component: PostamatSerialPrinterSkeletonComponent;
  let fixture: ComponentFixture<PostamatSerialPrinterSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostamatSerialPrinterSkeletonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostamatSerialPrinterSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
