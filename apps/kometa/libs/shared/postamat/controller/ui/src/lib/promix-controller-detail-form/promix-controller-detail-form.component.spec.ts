import { PromixControllerDetailFormComponent } from './promix-controller-detail-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PromixControllerDetailFormComponent', () => {
  let component: PromixControllerDetailFormComponent;
  let fixture: ComponentFixture<PromixControllerDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromixControllerDetailFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromixControllerDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
