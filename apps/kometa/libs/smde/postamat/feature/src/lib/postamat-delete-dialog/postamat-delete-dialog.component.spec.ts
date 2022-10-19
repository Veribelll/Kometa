import { PostamatDeleteDialogComponent } from './postamat-delete-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PostamatDeleteDialogComponent', () => {
  let component: PostamatDeleteDialogComponent;
  let fixture: ComponentFixture<PostamatDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostamatDeleteDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostamatDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
