import { IdentityRoleDeleteFormComponent } from './identity-role-delete-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('IdentityRoleDeleteFormComponent', () => {
  let component: IdentityRoleDeleteFormComponent;
  let fixture: ComponentFixture<IdentityRoleDeleteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IdentityRoleDeleteFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityRoleDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
