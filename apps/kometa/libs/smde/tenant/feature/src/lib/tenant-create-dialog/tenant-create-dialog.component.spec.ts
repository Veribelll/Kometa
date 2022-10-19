import { TenantCreateDialogComponent } from './tenant-create-dialog.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TenantCreateDialogComponent', () => {
  let component: TenantCreateDialogComponent;
  let fixture: ComponentFixture<TenantCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TenantCreateDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
