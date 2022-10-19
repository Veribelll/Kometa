import { PackingPlaceCreateFormComponent } from './packing-place-create-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PackingPlaceCreateFormComponent', () => {
  let component: PackingPlaceCreateFormComponent;
  let fixture: ComponentFixture<PackingPlaceCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackingPlaceCreateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingPlaceCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
