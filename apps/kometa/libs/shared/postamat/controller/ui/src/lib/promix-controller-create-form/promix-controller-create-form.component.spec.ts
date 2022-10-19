import { PromixControllerCreateFormComponent } from './promix-controller-create-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PromixControllerCreateFormComponent', () => {
  let component: PromixControllerCreateFormComponent;
  let fixture: ComponentFixture<PromixControllerCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromixControllerCreateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromixControllerCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
