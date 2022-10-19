import { IndividualEntrepreneurDetailFormComponent } from './individual-entrepreneur-detail-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('IndividualEntrepreneurDetailFormComponent', () => {
  let component: IndividualEntrepreneurDetailFormComponent;
  let fixture: ComponentFixture<IndividualEntrepreneurDetailFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualEntrepreneurDetailFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualEntrepreneurDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
