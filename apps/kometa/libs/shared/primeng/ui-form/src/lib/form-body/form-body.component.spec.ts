import { FormBodyComponent } from './form-body.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('FormBodyComponent', () => {
  let component: FormBodyComponent;
  let fixture: ComponentFixture<FormBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormBodyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
