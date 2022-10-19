import { TenantDeleteComponent } from './tenant-delete.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TenantDeleteComponent', () => {
  let component: TenantDeleteComponent;
  let fixture: ComponentFixture<TenantDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TenantDeleteComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
