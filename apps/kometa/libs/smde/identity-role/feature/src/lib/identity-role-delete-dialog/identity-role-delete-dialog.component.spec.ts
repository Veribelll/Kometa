import { IdentityRoleDeleteDialogComponent } from './identity-role-delete-dialog.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('IdentityRoleDeleteDialogComponent', () => {
  let component: IdentityRoleDeleteDialogComponent;
  let fixture: ComponentFixture<IdentityRoleDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IdentityRoleDeleteDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityRoleDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
