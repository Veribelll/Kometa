import { PromixControllerDeleteDialogComponent } from './promix-controller-delete-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PromixControllerDeleteDialogComponent', () => {
  let component: PromixControllerDeleteDialogComponent;
  let fixture: ComponentFixture<PromixControllerDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromixControllerDeleteDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromixControllerDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
