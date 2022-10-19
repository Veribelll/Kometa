import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessKeyDetailFormComponent } from './access-key-detail-form.component';

describe('AccessKeyDetailFormComponent', () => {
  let component: AccessKeyDetailFormComponent;
  let fixture: ComponentFixture<AccessKeyDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessKeyDetailFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessKeyDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
