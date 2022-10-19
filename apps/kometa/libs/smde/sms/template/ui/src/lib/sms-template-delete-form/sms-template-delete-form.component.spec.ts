import { SmsTemplateDeleteFormComponent } from './sms-template-delete-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SmsTemplateDeleteFormComponent', () => {
  let component: SmsTemplateDeleteFormComponent;
  let fixture: ComponentFixture<SmsTemplateDeleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmsTemplateDeleteFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsTemplateDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
