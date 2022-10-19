import { IndividualEntrepreneurUpdateDialogComponent } from './individual-entrepreneur-update-dialog.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('IndividualEntrepreneurUpdateDialogComponent', () => {
  let component: IndividualEntrepreneurUpdateDialogComponent;
  let fixture: ComponentFixture<IndividualEntrepreneurUpdateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualEntrepreneurUpdateDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualEntrepreneurUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
