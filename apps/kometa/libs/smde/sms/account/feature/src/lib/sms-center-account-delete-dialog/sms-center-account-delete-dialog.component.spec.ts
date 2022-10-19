import { SmsCenterAccountDeleteDialogComponent } from './sms-center-account-delete-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SmsCenterAccountDeleteDialogComponent', () => {
  let component: SmsCenterAccountDeleteDialogComponent;
  let fixture: ComponentFixture<SmsCenterAccountDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmsCenterAccountDeleteDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsCenterAccountDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
