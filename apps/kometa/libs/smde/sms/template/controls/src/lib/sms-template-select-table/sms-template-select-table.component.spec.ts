import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsTemplateSelectTableComponent } from './sms-template-select-table.component';

describe('SmsTemplateSelectTableComponent', () => {
  let component: SmsTemplateSelectTableComponent;
  let fixture: ComponentFixture<SmsTemplateSelectTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmsTemplateSelectTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsTemplateSelectTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
