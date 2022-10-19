import { EmexOrderUpdateFormComponent } from './emex-order-update-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('EmexOrderUpdateFormComponent', () => {
  let component: EmexOrderUpdateFormComponent;
  let fixture: ComponentFixture<EmexOrderUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmexOrderUpdateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmexOrderUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
