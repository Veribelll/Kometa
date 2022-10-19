import { PostamatTableComponent } from './postamat-table.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PostamatTableComponent', () => {
  let component: PostamatTableComponent;
  let fixture: ComponentFixture<PostamatTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostamatTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostamatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
