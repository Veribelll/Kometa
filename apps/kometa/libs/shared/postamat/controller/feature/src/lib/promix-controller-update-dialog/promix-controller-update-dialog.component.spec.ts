import { PromixControllerUpdateDialogComponent } from './promix-controller-update-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PromixControllerUpdateDialogComponent', () => {
  let component: PromixControllerUpdateDialogComponent;
  let fixture: ComponentFixture<PromixControllerUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromixControllerUpdateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromixControllerUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
