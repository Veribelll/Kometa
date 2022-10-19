import { SmsTemplatesComponent } from './sms-templates.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('SmsTemplatesComponent', () => {
  let component: SmsTemplatesComponent;
  let fixture: ComponentFixture<SmsTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SmsTemplatesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
