import { SmsTemplateUpdateFormComponent } from './sms-template-update-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SmsTemplateUpdateFormComponent', () => {
  let component: SmsTemplateUpdateFormComponent;
  let fixture: ComponentFixture<SmsTemplateUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmsTemplateUpdateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsTemplateUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
