import { PackingPlaceDeleteFormComponent } from './packing-place-delete-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PackingPlaceDeleteFormComponent', () => {
  let component: PackingPlaceDeleteFormComponent;
  let fixture: ComponentFixture<PackingPlaceDeleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackingPlaceDeleteFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingPlaceDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
