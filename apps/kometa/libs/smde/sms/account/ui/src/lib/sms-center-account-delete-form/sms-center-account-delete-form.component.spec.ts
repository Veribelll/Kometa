import { SmsCenterAccountDeleteFormComponent } from './sms-center-account-delete-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SmsCenterAccountDeleteFormComponent', () => {
  let component: SmsCenterAccountDeleteFormComponent;
  let fixture: ComponentFixture<SmsCenterAccountDeleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmsCenterAccountDeleteFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsCenterAccountDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
