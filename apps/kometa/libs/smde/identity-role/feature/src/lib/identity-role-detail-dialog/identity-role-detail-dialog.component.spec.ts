import { IdentityRoleDetailDialogComponent } from './identity-role-detail-dialog.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('IdentityRoleDetailDialogComponent', () => {
  let component: IdentityRoleDetailDialogComponent;
  let fixture: ComponentFixture<IdentityRoleDetailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IdentityRoleDetailDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityRoleDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
