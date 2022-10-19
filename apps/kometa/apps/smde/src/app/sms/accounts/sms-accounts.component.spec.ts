import { SmsAccountsComponent } from './sms-accounts.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SmsAccountsComponent', () => {
  let component: SmsAccountsComponent;
  let fixture: ComponentFixture<SmsAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmsAccountsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
