import { PackingPlaceDetailDialogComponent } from './packing-place-detail-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PackingPlaceDetailDialogComponent', () => {
  let component: PackingPlaceDetailDialogComponent;
  let fixture: ComponentFixture<PackingPlaceDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackingPlaceDetailDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingPlaceDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
