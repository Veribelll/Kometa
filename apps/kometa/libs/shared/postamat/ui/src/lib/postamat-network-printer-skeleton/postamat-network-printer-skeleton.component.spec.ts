import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostamatNetworkPrinterSkeletonComponent } from './postamat-network-printer-skeleton.component';

describe('PostamatNetworkPrinterSkeletonComponent', () => {
  let component: PostamatNetworkPrinterSkeletonComponent;
  let fixture: ComponentFixture<PostamatNetworkPrinterSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostamatNetworkPrinterSkeletonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostamatNetworkPrinterSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
