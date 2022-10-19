import { PostamatUpdateDialogComponent } from './postamat-update-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PostamatUpdateDialogComponent', () => {
  let component: PostamatUpdateDialogComponent;
  let fixture: ComponentFixture<PostamatUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostamatUpdateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostamatUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
