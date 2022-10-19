import { EmexCustomerFormComponent } from './emex-customer-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('EmexCustomerFormComponent', () => {
  let component: EmexCustomerFormComponent;
  let fixture: ComponentFixture<EmexCustomerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmexCustomerFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmexCustomerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
