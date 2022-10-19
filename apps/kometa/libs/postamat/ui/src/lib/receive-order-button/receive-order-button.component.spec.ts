import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveOrderButtonComponent } from './receive-order-button.component';

describe('ReceiveOrderButtonComponent', () => {
  let component: ReceiveOrderButtonComponent;
  let fixture: ComponentFixture<ReceiveOrderButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReceiveOrderButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveOrderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
