import { IdentityRolesPageComponent } from './identity-roles-page.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('IdentityRolesPageComponent', () => {
  let component: IdentityRolesPageComponent;
  let fixture: ComponentFixture<IdentityRolesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IdentityRolesPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityRolesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
