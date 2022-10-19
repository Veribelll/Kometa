import { TenantDetailDialogComponent } from './tenant-detail-dialog.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TenantDetailDialogComponent', () => {
  let component: TenantDetailDialogComponent;
  let fixture: ComponentFixture<TenantDetailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TenantDetailDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
