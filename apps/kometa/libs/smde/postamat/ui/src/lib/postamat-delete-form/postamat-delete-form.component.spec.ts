import { PostamatDeleteFormComponent } from './postamat-delete-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PostamatDeleteFormComponent', () => {
  let component: PostamatDeleteFormComponent;
  let fixture: ComponentFixture<PostamatDeleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostamatDeleteFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostamatDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
