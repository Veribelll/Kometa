import { TenantTableComponent } from './tenant-table.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('TenantTableComponent', () => {
  let component: TenantTableComponent;
  let fixture: ComponentFixture<TenantTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TenantTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
