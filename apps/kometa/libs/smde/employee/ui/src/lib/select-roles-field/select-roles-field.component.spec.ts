import { SelectRolesFieldComponent } from './select-roles-field.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SelectRolesFieldComponent', () => {
  let component: SelectRolesFieldComponent;
  let fixture: ComponentFixture<SelectRolesFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectRolesFieldComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRolesFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
