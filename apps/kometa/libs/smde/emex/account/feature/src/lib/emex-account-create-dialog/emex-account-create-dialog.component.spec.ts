import { EmexAccountCreateDialogComponent } from './emex-account-create-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('EmexAccountCreateDialogComponent', () => {
  let component: EmexAccountCreateDialogComponent;
  let fixture: ComponentFixture<EmexAccountCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmexAccountCreateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmexAccountCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
