import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostamatNetworkPrinterUpdateComponent } from './postamat-network-printer-update.component';

describe('PostamatNetworkPrinterUpdateComponent', () => {
  let component: PostamatNetworkPrinterUpdateComponent;
  let fixture: ComponentFixture<PostamatNetworkPrinterUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostamatNetworkPrinterUpdateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostamatNetworkPrinterUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
