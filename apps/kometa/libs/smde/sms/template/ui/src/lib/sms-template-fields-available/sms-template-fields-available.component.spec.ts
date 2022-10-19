import { SmsTemplateFieldsAvailableComponent } from './sms-template-fields-available.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SmsTemplateFieldsAvailableComponent', () => {
  let component: SmsTemplateFieldsAvailableComponent;
  let fixture: ComponentFixture<SmsTemplateFieldsAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmsTemplateFieldsAvailableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsTemplateFieldsAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
