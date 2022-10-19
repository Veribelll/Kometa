import { SmsAccountsPageComponent } from './sms-accounts-page.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SmsAccountsPageComponent', () => {
  let component: SmsAccountsPageComponent;
  let fixture: ComponentFixture<SmsAccountsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmsAccountsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsAccountsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
