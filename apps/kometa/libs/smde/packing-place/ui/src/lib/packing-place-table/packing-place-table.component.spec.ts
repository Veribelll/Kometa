import { PackingPlaceTableComponent } from './packing-place-table.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PackingPlaceTableComponent', () => {
  let component: PackingPlaceTableComponent;
  let fixture: ComponentFixture<PackingPlaceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackingPlaceTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingPlaceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
