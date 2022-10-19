import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostamatSerialPrinterUpdateComponent } from './postamat-serial-printer-update.component';

describe('PostamatSerialPrinterUpdateComponent', () => {
  let component: PostamatSerialPrinterUpdateComponent;
  let fixture: ComponentFixture<PostamatSerialPrinterUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostamatSerialPrinterUpdateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostamatSerialPrinterUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
