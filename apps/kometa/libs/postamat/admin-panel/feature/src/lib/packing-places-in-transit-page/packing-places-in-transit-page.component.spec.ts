import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingPlacesInTransitPageComponent } from './packing-places-in-transit-page.component';

describe('PackingPlacesInTransitPageComponent', () => {
  let component: PackingPlacesInTransitPageComponent;
  let fixture: ComponentFixture<PackingPlacesInTransitPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackingPlacesInTransitPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingPlacesInTransitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
