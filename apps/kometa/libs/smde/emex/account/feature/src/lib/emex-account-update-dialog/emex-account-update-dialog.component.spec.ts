import { EmexAccountUpdateDialogComponent } from './emex-account-update-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('EmexAccountUpdateDialogComponent', () => {
  let component: EmexAccountUpdateDialogComponent;
  let fixture: ComponentFixture<EmexAccountUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmexAccountUpdateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmexAccountUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
