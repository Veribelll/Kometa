import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMileSmsTemplateUpdateDialogComponent } from './last-mile-sms-template-update-dialog.component';

describe('LastMileSmsTemplateUpdateDialogComponent', () => {
  let component: LastMileSmsTemplateUpdateDialogComponent;
  let fixture: ComponentFixture<LastMileSmsTemplateUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastMileSmsTemplateUpdateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastMileSmsTemplateUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
