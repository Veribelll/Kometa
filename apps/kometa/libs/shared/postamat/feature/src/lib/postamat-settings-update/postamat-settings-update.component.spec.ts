import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostamatSettingsUpdateComponent } from './postamat-settings-update.component';

describe('PostamatSettingsUpdateComponent', () => {
  let component: PostamatSettingsUpdateComponent;
  let fixture: ComponentFixture<PostamatSettingsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostamatSettingsUpdateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostamatSettingsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
