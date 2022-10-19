import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessKeyCreateFormComponent } from './access-key-create-form.component';

describe('AccessKeyCreateFormComponent', () => {
  let component: AccessKeyCreateFormComponent;
  let fixture: ComponentFixture<AccessKeyCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessKeyCreateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessKeyCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
