import { TenantUpdateDialogComponent } from './tenant-update-dialog.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TenantUpdateDialogComponent', () => {
  let component: TenantUpdateDialogComponent;
  let fixture: ComponentFixture<TenantUpdateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TenantUpdateDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
