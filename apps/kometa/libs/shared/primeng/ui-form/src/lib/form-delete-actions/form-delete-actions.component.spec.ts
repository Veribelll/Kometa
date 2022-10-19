import { FormDeleteActionsComponent } from './form-delete-actions.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('FormDeleteActionsComponent', () => {
  let component: FormDeleteActionsComponent;
  let fixture: ComponentFixture<FormDeleteActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormDeleteActionsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDeleteActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
