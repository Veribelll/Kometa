import { EmexAccountDetailDialogComponent } from './emex-account-detail-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('EmexAccountDetailDialogComponent', () => {
  let component: EmexAccountDetailDialogComponent;
  let fixture: ComponentFixture<EmexAccountDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmexAccountDetailDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmexAccountDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
