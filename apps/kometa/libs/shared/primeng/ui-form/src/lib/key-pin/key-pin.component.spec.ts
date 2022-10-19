import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyPinComponent } from './key-pin.component';

describe('KeyPinComponent', () => {
  let component: KeyPinComponent;
  let fixture: ComponentFixture<KeyPinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeyPinComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
