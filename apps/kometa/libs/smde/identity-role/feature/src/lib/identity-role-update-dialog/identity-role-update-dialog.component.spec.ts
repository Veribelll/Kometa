import { IdentityRoleUpdateDialogComponent } from './identity-role-update-dialog.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('IdentityRoleUpdateDialogComponent', () => {
  let component: IdentityRoleUpdateDialogComponent;
  let fixture: ComponentFixture<IdentityRoleUpdateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IdentityRoleUpdateDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityRoleUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
