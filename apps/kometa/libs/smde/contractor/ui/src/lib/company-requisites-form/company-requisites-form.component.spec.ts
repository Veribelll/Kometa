import { CompanyRequisitesFormComponent } from './company-requisites-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('CompanyRequisitesFormComponent', () => {
  let component: CompanyRequisitesFormComponent;
  let fixture: ComponentFixture<CompanyRequisitesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyRequisitesFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRequisitesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
