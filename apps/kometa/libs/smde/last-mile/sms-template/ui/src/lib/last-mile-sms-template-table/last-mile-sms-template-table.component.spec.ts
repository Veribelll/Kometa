import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMileSmsTemplateTableComponent } from './last-mile-sms-template-table.component';

describe('LastMileSmsTemplateTableComponent', () => {
  let component: LastMileSmsTemplateTableComponent;
  let fixture: ComponentFixture<LastMileSmsTemplateTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastMileSmsTemplateTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastMileSmsTemplateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
