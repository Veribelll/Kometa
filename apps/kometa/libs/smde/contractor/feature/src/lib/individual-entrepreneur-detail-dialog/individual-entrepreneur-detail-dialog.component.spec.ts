import { IndividualEntrepreneurDetailDialogComponent } from './individual-entrepreneur-detail-dialog.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('IndividualEntrepreneurDetailDialogComponent', () => {
  let component: IndividualEntrepreneurDetailDialogComponent;
  let fixture: ComponentFixture<IndividualEntrepreneurDetailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualEntrepreneurDetailDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualEntrepreneurDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
