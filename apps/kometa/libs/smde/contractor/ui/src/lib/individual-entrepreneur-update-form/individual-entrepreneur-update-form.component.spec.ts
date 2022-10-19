import { IndividualEntrepreneurUpdateFormComponent } from './individual-entrepreneur-update-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('IndividualEntrepreneurUpdateFormComponent', () => {
  let component: IndividualEntrepreneurUpdateFormComponent;
  let fixture: ComponentFixture<IndividualEntrepreneurUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualEntrepreneurUpdateFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualEntrepreneurUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
