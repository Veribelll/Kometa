import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnRequestReturnFormComponent } from './return-request-return-form.component';

describe('ReturnRequestReturnFormComponent', () => {
  let component: ReturnRequestReturnFormComponent;
  let fixture: ComponentFixture<ReturnRequestReturnFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReturnRequestReturnFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnRequestReturnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
