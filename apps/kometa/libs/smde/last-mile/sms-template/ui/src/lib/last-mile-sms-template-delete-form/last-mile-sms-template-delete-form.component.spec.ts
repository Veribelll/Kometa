import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMileSmsTemplateDeleteFormComponent } from './last-mile-sms-template-delete-form.component';

describe('LastMileSmsTemplateDeleteFormComponent', () => {
  let component: LastMileSmsTemplateDeleteFormComponent;
  let fixture: ComponentFixture<LastMileSmsTemplateDeleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastMileSmsTemplateDeleteFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastMileSmsTemplateDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
