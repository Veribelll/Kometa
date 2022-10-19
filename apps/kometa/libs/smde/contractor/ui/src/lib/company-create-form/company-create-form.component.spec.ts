import { CompanyCreateFormComponent } from './company-create-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('CompanyCreateFormComponent', () => {
  let component: CompanyCreateFormComponent;
  let fixture: ComponentFixture<CompanyCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyCreateFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
