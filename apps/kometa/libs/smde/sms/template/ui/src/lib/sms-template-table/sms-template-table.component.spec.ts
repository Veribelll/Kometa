import { SmsTemplateTableComponent } from './sms-template-table.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SmsTemplateTableComponent', () => {
  let component: SmsTemplateTableComponent;
  let fixture: ComponentFixture<SmsTemplateTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmsTemplateTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsTemplateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
