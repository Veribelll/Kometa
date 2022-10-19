import { ReturnRequestUpdateDialogComponent } from './return-request-update-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ReturnRequestUpdateDialogComponent', () => {
  let component: ReturnRequestUpdateDialogComponent;
  let fixture: ComponentFixture<ReturnRequestUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReturnRequestUpdateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnRequestUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
