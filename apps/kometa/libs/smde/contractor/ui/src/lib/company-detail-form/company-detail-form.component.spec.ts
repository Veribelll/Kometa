import { CompanyDetailFormComponent } from './company-detail-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('CompanyDetailFormComponent', () => {
  let component: CompanyDetailFormComponent;
  let fixture: ComponentFixture<CompanyDetailFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyDetailFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
