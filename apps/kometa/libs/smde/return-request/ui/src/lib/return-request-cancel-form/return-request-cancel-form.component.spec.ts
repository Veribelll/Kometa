import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnRequestCancelFormComponent } from './return-request-cancel-form.component';

describe('ReturnRequestCancelFormComponent', () => {
  let component: ReturnRequestCancelFormComponent;
  let fixture: ComponentFixture<ReturnRequestCancelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReturnRequestCancelFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnRequestCancelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
