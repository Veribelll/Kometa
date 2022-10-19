import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessKeyUpdateFormComponent } from './access-key-update-form.component';

describe('AccessKeyUpdateFormComponent', () => {
  let component: AccessKeyUpdateFormComponent;
  let fixture: ComponentFixture<AccessKeyUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessKeyUpdateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessKeyUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
