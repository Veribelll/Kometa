import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessKeyDeleteFormComponent } from './access-key-delete-form.component';

describe('AccessKeyDeleteFormComponent', () => {
  let component: AccessKeyDeleteFormComponent;
  let fixture: ComponentFixture<AccessKeyDeleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessKeyDeleteFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessKeyDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
