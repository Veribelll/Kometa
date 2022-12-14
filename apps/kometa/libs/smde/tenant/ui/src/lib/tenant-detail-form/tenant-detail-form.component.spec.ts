import { TenantDetailComponent } from './tenant-detail.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TenantDetailComponent', () => {
  let component: TenantDetailComponent;
  let fixture: ComponentFixture<TenantDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TenantDetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
