import { PermissionFieldsComponent } from './permission-fields.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PermissionFieldsComponent', () => {
  let component: PermissionFieldsComponent;
  let fixture: ComponentFixture<PermissionFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PermissionFieldsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
