import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialPrinterComponent } from './serial-printer.component';

describe('SerialPrinterComponent', () => {
  let component: SerialPrinterComponent;
  let fixture: ComponentFixture<SerialPrinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SerialPrinterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerialPrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
