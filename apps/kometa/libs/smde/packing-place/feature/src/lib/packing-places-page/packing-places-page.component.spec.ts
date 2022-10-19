import { PackingPlacesPageComponent } from './packing-places-page.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PackingPlacesPageComponent', () => {
  let component: PackingPlacesPageComponent;
  let fixture: ComponentFixture<PackingPlacesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackingPlacesPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingPlacesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
