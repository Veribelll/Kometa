import { PostamatSettingsUpdateFormComponent } from './postamat-settings-update-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PostamatSettingsUpdateFormComponent', () => {
  let component: PostamatSettingsUpdateFormComponent;
  let fixture: ComponentFixture<PostamatSettingsUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostamatSettingsUpdateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostamatSettingsUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
