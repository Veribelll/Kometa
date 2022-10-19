import { EmexAccountDeleteDialogComponent } from './emex-account-delete-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('EmexAccountDeleteDialogComponent', () => {
  let component: EmexAccountDeleteDialogComponent;
  let fixture: ComponentFixture<EmexAccountDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmexAccountDeleteDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmexAccountDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
