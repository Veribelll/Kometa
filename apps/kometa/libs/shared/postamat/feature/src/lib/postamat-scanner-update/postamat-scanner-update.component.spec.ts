import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostamatScannerUpdateComponent } from './postamat-scanner-update.component';

describe('PostamatScannerUpdateComponent', () => {
  let component: PostamatScannerUpdateComponent;
  let fixture: ComponentFixture<PostamatScannerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostamatScannerUpdateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostamatScannerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
