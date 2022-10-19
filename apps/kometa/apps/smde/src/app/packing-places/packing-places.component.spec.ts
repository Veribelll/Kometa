import { PackingPlacesComponent } from './packing-places.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PackingPlacesComponent', () => {
  let component: PackingPlacesComponent;
  let fixture: ComponentFixture<PackingPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackingPlacesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
