import { SmsCenterAccountUpdateDialogComponent } from './sms-center-account-update-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SmsCenterAccountUpdateDialogComponent', () => {
  let component: SmsCenterAccountUpdateDialogComponent;
  let fixture: ComponentFixture<SmsCenterAccountUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmsCenterAccountUpdateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsCenterAccountUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
