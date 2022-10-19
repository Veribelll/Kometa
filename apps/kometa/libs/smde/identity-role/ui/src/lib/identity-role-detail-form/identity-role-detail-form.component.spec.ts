import { IdentityRoleDetailFormComponent } from './identity-role-detail-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('IdentityRoleDetailFormComponent', () => {
  let component: IdentityRoleDetailFormComponent;
  let fixture: ComponentFixture<IdentityRoleDetailFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IdentityRoleDetailFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityRoleDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
