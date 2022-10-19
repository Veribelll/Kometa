import { IndividualEntrepreneurCreateFormComponent } from './individual-entrepreneur-create-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('IndividualEntrepreneurCreateFormComponent', () => {
  let component: IndividualEntrepreneurCreateFormComponent;
  let fixture: ComponentFixture<IndividualEntrepreneurCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualEntrepreneurCreateFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualEntrepreneurCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
