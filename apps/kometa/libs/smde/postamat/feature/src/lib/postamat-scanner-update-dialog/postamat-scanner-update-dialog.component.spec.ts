import { PostamatScannerUpdateDialogComponent } from './postamat-scanner-update-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PostamatScannerUpdateDialogComponent', () => {
  let component: PostamatScannerUpdateDialogComponent;
  let fixture: ComponentFixture<PostamatScannerUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostamatScannerUpdateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostamatScannerUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
