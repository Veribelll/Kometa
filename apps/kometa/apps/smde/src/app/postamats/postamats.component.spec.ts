import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostamatsComponent } from './postamats.component';

describe('PostamatsComponent', () => {
  let component: PostamatsComponent;
  let fixture: ComponentFixture<PostamatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostamatsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostamatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
