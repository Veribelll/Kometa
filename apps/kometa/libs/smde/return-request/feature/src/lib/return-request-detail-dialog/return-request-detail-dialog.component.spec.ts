import { ReturnRequestDetailDialogComponent } from './return-request-detail-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ReturnRequestDetailDialogComponent', () => {
  let component: ReturnRequestDetailDialogComponent;
  let fixture: ComponentFixture<ReturnRequestDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReturnRequestDetailDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnRequestDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
