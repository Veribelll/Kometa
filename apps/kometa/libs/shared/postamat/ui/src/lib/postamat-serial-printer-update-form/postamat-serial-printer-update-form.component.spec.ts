import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostamatSerialPrinterUpdateFormComponent } from './postamat-serial-printer-update-form.component';

describe('PostamatSerialPrinterUpdateFormComponent', () => {
  let component: PostamatSerialPrinterUpdateFormComponent;
  let fixture: ComponentFixture<PostamatSerialPrinterUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostamatSerialPrinterUpdateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostamatSerialPrinterUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
