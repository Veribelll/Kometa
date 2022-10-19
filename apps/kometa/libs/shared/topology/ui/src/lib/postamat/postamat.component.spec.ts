import { PostamatComponent } from './postamat.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PostamatComponent', () => {
  let component: PostamatComponent;
  let fixture: ComponentFixture<PostamatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostamatComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostamatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
