import { SmsCenterAccountCreateFormComponent } from './sms-center-account-create-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SmsCenterAccountCreateFormComponent', () => {
  let component: SmsCenterAccountCreateFormComponent;
  let fixture: ComponentFixture<SmsCenterAccountCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmsCenterAccountCreateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsCenterAccountCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
