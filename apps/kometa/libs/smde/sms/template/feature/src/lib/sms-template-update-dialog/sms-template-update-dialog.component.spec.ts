import { SmsTemplateUpdateDialogComponent } from './sms-template-update-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SmsTemplateUpdateDialogComponent', () => {
  let component: SmsTemplateUpdateDialogComponent;
  let fixture: ComponentFixture<SmsTemplateUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmsTemplateUpdateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsTemplateUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
