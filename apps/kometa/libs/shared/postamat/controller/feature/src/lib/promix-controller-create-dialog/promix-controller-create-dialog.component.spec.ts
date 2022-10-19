import { PromixControllerCreateDialogComponent } from './promix-controller-create-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PromixControllerCreateDialogComponent', () => {
  let component: PromixControllerCreateDialogComponent;
  let fixture: ComponentFixture<PromixControllerCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromixControllerCreateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromixControllerCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
