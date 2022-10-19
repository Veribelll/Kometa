import { PostamatCreateFormComponent } from './postamat-create-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PostamatCreateFormComponent', () => {
  let component: PostamatCreateFormComponent;
  let fixture: ComponentFixture<PostamatCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostamatCreateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostamatCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
