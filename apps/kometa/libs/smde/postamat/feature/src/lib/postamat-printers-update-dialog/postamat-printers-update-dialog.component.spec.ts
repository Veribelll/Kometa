import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostamatPrintersUpdateDialogComponent } from './postamat-printers-update-dialog.component';

describe('PostamatPrintersUpdateDialogComponent', () => {
  let component: PostamatPrintersUpdateDialogComponent;
  let fixture: ComponentFixture<PostamatPrintersUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostamatPrintersUpdateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostamatPrintersUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
