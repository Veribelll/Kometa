import { PostamatsPageComponent } from './postamats-page.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PostamatsPageComponent', () => {
  let component: PostamatsPageComponent;
  let fixture: ComponentFixture<PostamatsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostamatsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostamatsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
