import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostamatFilePrinterUpdateComponent } from './postamat-file-printer-update.component';

describe('PostamatFilePrinterUpdateComponent', () => {
  let component: PostamatFilePrinterUpdateComponent;
  let fixture: ComponentFixture<PostamatFilePrinterUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostamatFilePrinterUpdateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostamatFilePrinterUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
