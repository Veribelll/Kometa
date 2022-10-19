import { SmsAccountTableComponent } from './sms-account-table.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SmsAccountTableComponent', () => {
  let component: SmsAccountTableComponent;
  let fixture: ComponentFixture<SmsAccountTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmsAccountTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsAccountTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
