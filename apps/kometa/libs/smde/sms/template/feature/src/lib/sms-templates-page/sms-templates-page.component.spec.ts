import { SmsTemplatesPageComponent } from './sms-templates-page.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SmsTemplatesPageComponent', () => {
  let component: SmsTemplatesPageComponent;
  let fixture: ComponentFixture<SmsTemplatesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmsTemplatesPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsTemplatesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
