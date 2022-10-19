import { PromixControllerDeleteFormComponent } from './promix-controller-delete-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PromixControllerDeleteFormComponent', () => {
  let component: PromixControllerDeleteFormComponent;
  let fixture: ComponentFixture<PromixControllerDeleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromixControllerDeleteFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromixControllerDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
