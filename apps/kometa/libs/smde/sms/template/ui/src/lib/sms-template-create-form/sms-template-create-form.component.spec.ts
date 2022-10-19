import { SmsTemplateCreateFormComponent } from './sms-template-create-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SmsTemplateCreateFormComponent', () => {
  let component: SmsTemplateCreateFormComponent;
  let fixture: ComponentFixture<SmsTemplateCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmsTemplateCreateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsTemplateCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
