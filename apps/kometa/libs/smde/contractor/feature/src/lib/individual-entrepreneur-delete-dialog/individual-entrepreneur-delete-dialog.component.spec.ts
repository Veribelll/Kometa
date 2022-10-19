import { IndividualEntrepreneurDeleteDialogComponent } from './individual-entrepreneur-delete-dialog.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('IndividualEntrepreneurDeleteDialogComponent', () => {
  let component: IndividualEntrepreneurDeleteDialogComponent;
  let fixture: ComponentFixture<IndividualEntrepreneurDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualEntrepreneurDeleteDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualEntrepreneurDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
