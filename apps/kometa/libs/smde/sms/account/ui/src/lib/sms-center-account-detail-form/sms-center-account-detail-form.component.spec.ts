import { SmsCenterAccountDetailFormComponent } from './sms-center-account-detail-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SmsCenterAccountDetailFormComponent', () => {
  let component: SmsCenterAccountDetailFormComponent;
  let fixture: ComponentFixture<SmsCenterAccountDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmsCenterAccountDetailFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsCenterAccountDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
