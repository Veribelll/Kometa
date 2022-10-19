import { PostamatDetailDialogComponent } from './postamat-detail-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PostamatDetailDialogComponent', () => {
  let component: PostamatDetailDialogComponent;
  let fixture: ComponentFixture<PostamatDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostamatDetailDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostamatDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
