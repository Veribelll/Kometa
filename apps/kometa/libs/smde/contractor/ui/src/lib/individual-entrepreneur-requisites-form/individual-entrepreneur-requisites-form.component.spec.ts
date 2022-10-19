import { IndividualEntrepreneurRequisitesFormComponent } from './individual-entrepreneur-requisites-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('IndividualEntrepreneurRequisitesFormComponent', () => {
  let component: IndividualEntrepreneurRequisitesFormComponent;
  let fixture: ComponentFixture<IndividualEntrepreneurRequisitesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualEntrepreneurRequisitesFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualEntrepreneurRequisitesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
