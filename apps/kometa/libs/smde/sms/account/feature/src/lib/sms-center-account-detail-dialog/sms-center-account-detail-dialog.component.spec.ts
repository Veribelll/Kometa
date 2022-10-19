import { SmsCenterAccountDetailDialogComponent } from './sms-center-account-detail-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SmsCenterAccountDetailDialogComponent', () => {
  let component: SmsCenterAccountDetailDialogComponent;
  let fixture: ComponentFixture<SmsCenterAccountDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmsCenterAccountDetailDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsCenterAccountDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
