import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMileSmsTemplateDeleteDialogComponent } from './last-mile-sms-template-delete-dialog.component';

describe('LastMileSmsTemplateDeleteDialogComponent', () => {
  let component: LastMileSmsTemplateDeleteDialogComponent;
  let fixture: ComponentFixture<LastMileSmsTemplateDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastMileSmsTemplateDeleteDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastMileSmsTemplateDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
