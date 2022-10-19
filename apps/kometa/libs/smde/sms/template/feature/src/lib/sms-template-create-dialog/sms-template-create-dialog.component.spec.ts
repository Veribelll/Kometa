import { SmsTemplateCreateDialogComponent } from './sms-template-create-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SmsTemplateCreateDialogComponent', () => {
  let component: SmsTemplateCreateDialogComponent;
  let fixture: ComponentFixture<SmsTemplateCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmsTemplateCreateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsTemplateCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
