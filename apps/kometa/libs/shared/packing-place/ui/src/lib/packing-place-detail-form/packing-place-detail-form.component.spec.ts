import { PackingPlaceDetailFormComponent } from './packing-place-detail-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PackingPlaceDetailFormComponent', () => {
  let component: PackingPlaceDetailFormComponent;
  let fixture: ComponentFixture<PackingPlaceDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackingPlaceDetailFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingPlaceDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
