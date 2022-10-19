import { PackingPlaceDeleteDialogComponent } from './packing-place-delete-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PackingPlaceDeleteDialogComponent', () => {
  let component: PackingPlaceDeleteDialogComponent;
  let fixture: ComponentFixture<PackingPlaceDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackingPlaceDeleteDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingPlaceDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
