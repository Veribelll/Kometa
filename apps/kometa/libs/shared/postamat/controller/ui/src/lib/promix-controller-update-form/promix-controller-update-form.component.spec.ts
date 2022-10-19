import { PromixControllerUpdateFormComponent } from './promix-controller-update-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PromixControllerUpdateFormComponent', () => {
  let component: PromixControllerUpdateFormComponent;
  let fixture: ComponentFixture<PromixControllerUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromixControllerUpdateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromixControllerUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
