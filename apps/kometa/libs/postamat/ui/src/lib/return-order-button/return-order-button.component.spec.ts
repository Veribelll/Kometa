import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnOrderButtonComponent } from './return-order-button.component';

describe('ReturnOrderButtonComponent', () => {
  let component: ReturnOrderButtonComponent;
  let fixture: ComponentFixture<ReturnOrderButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReturnOrderButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnOrderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
