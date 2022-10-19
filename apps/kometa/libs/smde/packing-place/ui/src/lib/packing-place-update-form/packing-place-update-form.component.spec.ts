import { PackingPlaceUpdateFormComponent } from './packing-place-update-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PackingPlaceUpdateFormComponent', () => {
  let component: PackingPlaceUpdateFormComponent;
  let fixture: ComponentFixture<PackingPlaceUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackingPlaceUpdateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingPlaceUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
