import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostamatViewPageComponent } from './postamat-view-page.component';

describe('PostamatViewPageComponent', () => {
  let component: PostamatViewPageComponent;
  let fixture: ComponentFixture<PostamatViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostamatViewPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostamatViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
