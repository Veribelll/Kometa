import { PostamatScannerUpdateFormComponent } from './postamat-scanner-update-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PostamatScannerUpdateFormComponent', () => {
  let component: PostamatScannerUpdateFormComponent;
  let fixture: ComponentFixture<PostamatScannerUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostamatScannerUpdateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostamatScannerUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
