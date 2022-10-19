import { IndividualEntrepreneurCreateDialogComponent } from './individual-entrepreneur-create-dialog.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('IndividualEntrepreneurCreateDialogComponent', () => {
  let component: IndividualEntrepreneurCreateDialogComponent;
  let fixture: ComponentFixture<IndividualEntrepreneurCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualEntrepreneurCreateDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualEntrepreneurCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
