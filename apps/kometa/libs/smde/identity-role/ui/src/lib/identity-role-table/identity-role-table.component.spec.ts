import { IdentityRoleTableComponent } from './identity-role-table.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('IdentityRoleTableComponent', () => {
  let component: IdentityRoleTableComponent;
  let fixture: ComponentFixture<IdentityRoleTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IdentityRoleTableComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityRoleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
