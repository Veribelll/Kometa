import { TenantUpdateFormComponent } from './tenant-update-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TenantUpdateFormComponent', () => {
  let component: TenantUpdateFormComponent;
  let fixture: ComponentFixture<TenantUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TenantUpdateFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
