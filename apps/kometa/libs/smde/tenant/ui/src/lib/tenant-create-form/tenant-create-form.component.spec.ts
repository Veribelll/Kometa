import { TenantCreateFormComponent } from './tenant-create-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TenantCreateFormComponent', () => {
  let component: TenantCreateFormComponent;
  let fixture: ComponentFixture<TenantCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TenantCreateFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
