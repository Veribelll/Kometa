import { SmsTemplateDeleteDialogComponent } from './sms-template-delete-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SmsTemplateDeleteDialogComponent', () => {
  let component: SmsTemplateDeleteDialogComponent;
  let fixture: ComponentFixture<SmsTemplateDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmsTemplateDeleteDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsTemplateDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
