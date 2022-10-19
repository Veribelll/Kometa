import { SmsCenterAccountUpdateFormComponent } from './sms-center-account-update-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SmsCenterAccountUpdateFormComponent', () => {
  let component: SmsCenterAccountUpdateFormComponent;
  let fixture: ComponentFixture<SmsCenterAccountUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmsCenterAccountUpdateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsCenterAccountUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
