import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMileSmsTemplatesPageComponent } from './last-mile-sms-templates-page.component';

describe('LastMileSmsTemplatesPageComponent', () => {
  let component: LastMileSmsTemplatesPageComponent;
  let fixture: ComponentFixture<LastMileSmsTemplatesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastMileSmsTemplatesPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastMileSmsTemplatesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
