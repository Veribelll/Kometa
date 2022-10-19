import { CompanyDeleteFormComponent } from './company-delete-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('CompanyDeleteFormComponent', () => {
  let component: CompanyDeleteFormComponent;
  let fixture: ComponentFixture<CompanyDeleteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyDeleteFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
