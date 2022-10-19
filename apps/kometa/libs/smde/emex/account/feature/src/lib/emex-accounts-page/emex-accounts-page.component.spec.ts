import { EmexAccountsPageComponent } from './emex-accounts-page.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('EmexAccountsPageComponent', () => {
  let component: EmexAccountsPageComponent;
  let fixture: ComponentFixture<EmexAccountsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmexAccountsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmexAccountsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
