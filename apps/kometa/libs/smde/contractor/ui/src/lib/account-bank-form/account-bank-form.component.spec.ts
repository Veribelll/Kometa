import { AccountBankFormComponent } from './account-bank-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('AccountBankFormComponent', () => {
  let component: AccountBankFormComponent;
  let fixture: ComponentFixture<AccountBankFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountBankFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountBankFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
