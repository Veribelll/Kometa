import { PackingPlaceUpdateDialogComponent } from './packing-place-update-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PackingPlaceUpdateDialogComponent', () => {
  let component: PackingPlaceUpdateDialogComponent;
  let fixture: ComponentFixture<PackingPlaceUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackingPlaceUpdateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingPlaceUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
