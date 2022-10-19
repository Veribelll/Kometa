import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostamatSettingsSkeletonComponent } from './postamat-settings-skeleton.component';

describe('PostamatSettingsSkeletonComponent', () => {
  let component: PostamatSettingsSkeletonComponent;
  let fixture: ComponentFixture<PostamatSettingsSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostamatSettingsSkeletonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostamatSettingsSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
