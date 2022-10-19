import { PostamatUpdateFormComponent } from './postamat-update-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PostamatUpdateFormComponent', () => {
  let component: PostamatUpdateFormComponent;
  let fixture: ComponentFixture<PostamatUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostamatUpdateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostamatUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
