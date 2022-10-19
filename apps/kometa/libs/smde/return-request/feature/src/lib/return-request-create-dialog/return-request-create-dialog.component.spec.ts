import { ReturnRequestCreateDialogComponent } from './return-request-create-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ReturnRequestCreateDialogComponent', () => {
  let component: ReturnRequestCreateDialogComponent;
  let fixture: ComponentFixture<ReturnRequestCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReturnRequestCreateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnRequestCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
