import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsTemplateSelectControlComponent } from './sms-template-select-control.component';

describe('SmsTemplateSelectControlComponent', () => {
  let component: SmsTemplateSelectControlComponent;
  let fixture: ComponentFixture<SmsTemplateSelectControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmsTemplateSelectControlComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsTemplateSelectControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
