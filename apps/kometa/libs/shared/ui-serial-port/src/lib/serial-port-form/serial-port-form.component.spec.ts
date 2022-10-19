import { SerialPortFormComponent } from './serial-port-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SerialPortFormComponent', () => {
  let component: SerialPortFormComponent;
  let fixture: ComponentFixture<SerialPortFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SerialPortFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerialPortFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
