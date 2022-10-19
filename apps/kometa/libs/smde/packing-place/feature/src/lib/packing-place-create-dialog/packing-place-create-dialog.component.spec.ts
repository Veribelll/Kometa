import { PackingPlaceCreateDialogComponent } from './packing-place-create-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PackingPlaceCreateDialogComponent', () => {
  let component: PackingPlaceCreateDialogComponent;
  let fixture: ComponentFixture<PackingPlaceCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackingPlaceCreateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingPlaceCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
