import { TenantDeleteDialogComponent } from './tenant-delete-dialog.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TenantDeleteDialogComponent', () => {
  let component: TenantDeleteDialogComponent;
  let fixture: ComponentFixture<TenantDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TenantDeleteDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
