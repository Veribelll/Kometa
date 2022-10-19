import { PostamatDetailFormComponent } from './postamat-detail-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PostamatDetailFormComponent', () => {
  let component: PostamatDetailFormComponent;
  let fixture: ComponentFixture<PostamatDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostamatDetailFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostamatDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
