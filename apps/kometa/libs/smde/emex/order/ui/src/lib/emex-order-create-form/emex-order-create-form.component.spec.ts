import { EmexOrderCreateFormComponent } from './emex-order-create-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('EmexOrderCreateFormComponent', () => {
  let component: EmexOrderCreateFormComponent;
  let fixture: ComponentFixture<EmexOrderCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmexOrderCreateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmexOrderCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
