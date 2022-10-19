import { PostamatSettingsUpdateDialogComponent } from './postamat-settings-update-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PostamatSettingsUpdateDialogComponent', () => {
  let component: PostamatSettingsUpdateDialogComponent;
  let fixture: ComponentFixture<PostamatSettingsUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostamatSettingsUpdateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostamatSettingsUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
