import { EmexOrderDetailFormComponent } from './emex-order-detail-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('EmexOrderDetailFormComponent', () => {
  let component: EmexOrderDetailFormComponent;
  let fixture: ComponentFixture<EmexOrderDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmexOrderDetailFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmexOrderDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
