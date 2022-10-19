import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingPlacesAcceptedPageComponent } from './packing-places-accepted-page.component';

describe('PackingPlacesAcceptedPageComponent', () => {
  let component: PackingPlacesAcceptedPageComponent;
  let fixture: ComponentFixture<PackingPlacesAcceptedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackingPlacesAcceptedPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingPlacesAcceptedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
