import { IdentityRoleCreateDialogComponent } from './identity-role-create-dialog.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('IdentityRoleCreateDialogComponent', () => {
  let component: IdentityRoleCreateDialogComponent;
  let fixture: ComponentFixture<IdentityRoleCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IdentityRoleCreateDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityRoleCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
