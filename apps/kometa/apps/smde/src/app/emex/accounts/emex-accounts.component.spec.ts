import { EmexAccountsComponent } from './emex-accounts.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('EmexAccountsComponent', () => {
  let component: EmexAccountsComponent;
  let fixture: ComponentFixture<EmexAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmexAccountsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmexAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
