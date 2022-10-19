import { IdentityRolesComponent } from './identity-roles.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('IdentityRolesComponent', () => {
  let component: IdentityRolesComponent;
  let fixture: ComponentFixture<IdentityRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IdentityRolesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
