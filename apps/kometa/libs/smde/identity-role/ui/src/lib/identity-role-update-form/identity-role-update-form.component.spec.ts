import { IdentityRoleUpdateFormComponent } from './identity-role-update-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('IdentityRoleUpdateFormComponent', () => {
  let component: IdentityRoleUpdateFormComponent;
  let fixture: ComponentFixture<IdentityRoleUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IdentityRoleUpdateFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityRoleUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
