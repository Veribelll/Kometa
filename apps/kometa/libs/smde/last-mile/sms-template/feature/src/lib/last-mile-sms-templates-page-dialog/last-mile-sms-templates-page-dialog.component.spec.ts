import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMileSmsTemplatesPageDialogComponent } from './last-mile-sms-templates-page-dialog.component';

describe('LastMileSmsTemplatesPageDialogComponent', () => {
  let component: LastMileSmsTemplatesPageDialogComponent;
  let fixture: ComponentFixture<LastMileSmsTemplatesPageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastMileSmsTemplatesPageDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastMileSmsTemplatesPageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
