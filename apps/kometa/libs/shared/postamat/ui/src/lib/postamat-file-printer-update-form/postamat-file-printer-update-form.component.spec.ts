import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostamatFilePrinterUpdateFormComponent } from './postamat-file-printer-update-form.component';

describe('PostamatFilePrinterUpdateFormComponent', () => {
  let component: PostamatFilePrinterUpdateFormComponent;
  let fixture: ComponentFixture<PostamatFilePrinterUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostamatFilePrinterUpdateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostamatFilePrinterUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
