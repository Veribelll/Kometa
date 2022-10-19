import { IndividualEntrepreneurDeleteFormComponent } from './individual-entrepreneur-delete-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('IndividualEntrepreneurDeleteFormComponent', () => {
  let component: IndividualEntrepreneurDeleteFormComponent;
  let fixture: ComponentFixture<IndividualEntrepreneurDeleteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualEntrepreneurDeleteFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualEntrepreneurDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
