import { SmsTemplateDetailFormComponent } from './sms-template-detail-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SmsTemplateDetailFormComponent', () => {
  let component: SmsTemplateDetailFormComponent;
  let fixture: ComponentFixture<SmsTemplateDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmsTemplateDetailFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsTemplateDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
