import { PromixControllerDetailDialogComponent } from './promix-controller-detail-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PromixControllerDetailDialogComponent', () => {
  let component: PromixControllerDetailDialogComponent;
  let fixture: ComponentFixture<PromixControllerDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromixControllerDetailDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromixControllerDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
