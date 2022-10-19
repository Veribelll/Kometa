import { EmexOrderDeleteFormComponent } from './emex-order-delete-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('EmexOrderDeleteFormComponent', () => {
  let component: EmexOrderDeleteFormComponent;
  let fixture: ComponentFixture<EmexOrderDeleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmexOrderDeleteFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmexOrderDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
