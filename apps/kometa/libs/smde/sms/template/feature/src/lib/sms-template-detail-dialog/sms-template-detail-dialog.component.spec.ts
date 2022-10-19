import { SmsTemplateDetailDialogComponent } from './sms-template-detail-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SmsTemplateDetailDialogComponent', () => {
  let component: SmsTemplateDetailDialogComponent;
  let fixture: ComponentFixture<SmsTemplateDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmsTemplateDetailDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsTemplateDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
