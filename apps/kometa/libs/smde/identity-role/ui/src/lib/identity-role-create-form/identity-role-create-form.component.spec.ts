import { IdentityRoleCreateFormComponent } from './identity-role-create-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('IdentityRoleCreateFormComponent', () => {
  let component: IdentityRoleCreateFormComponent;
  let fixture: ComponentFixture<IdentityRoleCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IdentityRoleCreateFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityRoleCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
