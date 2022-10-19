import { SmsCenterAccountCreateDialogComponent } from './sms-center-account-create-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SmsCenterAccountCreateDialogComponent', () => {
  let component: SmsCenterAccountCreateDialogComponent;
  let fixture: ComponentFixture<SmsCenterAccountCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmsCenterAccountCreateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsCenterAccountCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
