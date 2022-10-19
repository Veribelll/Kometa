import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMileSmsTemplateUpdateFormComponent } from './last-mile-sms-template-update-form.component';

describe('LastMileSmsTemplateUpdateFormComponent', () => {
  let component: LastMileSmsTemplateUpdateFormComponent;
  let fixture: ComponentFixture<LastMileSmsTemplateUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastMileSmsTemplateUpdateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastMileSmsTemplateUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
