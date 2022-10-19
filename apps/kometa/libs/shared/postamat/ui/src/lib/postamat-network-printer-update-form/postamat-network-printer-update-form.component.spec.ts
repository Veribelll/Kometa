import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostamatNetworkPrinterUpdateFormComponent } from './postamat-network-printer-update-form.component';

describe('PostamatNetworkPrinterUpdateFormComponent', () => {
  let component: PostamatNetworkPrinterUpdateFormComponent;
  let fixture: ComponentFixture<PostamatNetworkPrinterUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostamatNetworkPrinterUpdateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostamatNetworkPrinterUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
