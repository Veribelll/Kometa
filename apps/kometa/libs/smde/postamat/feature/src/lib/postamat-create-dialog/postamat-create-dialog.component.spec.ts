import { PostamatCreateDialogComponent } from './postamat-create-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PostamatCreateDialogComponent', () => {
  let component: PostamatCreateDialogComponent;
  let fixture: ComponentFixture<PostamatCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostamatCreateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostamatCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
