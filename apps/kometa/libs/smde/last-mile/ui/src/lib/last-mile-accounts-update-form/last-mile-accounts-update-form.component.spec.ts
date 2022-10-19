import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMileAccountsUpdateFormComponent } from './last-mile-accounts-update-form.component';

describe('LastMileAccountsUpdateFormComponent', () => {
  let component: LastMileAccountsUpdateFormComponent;
  let fixture: ComponentFixture<LastMileAccountsUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastMileAccountsUpdateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastMileAccountsUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
