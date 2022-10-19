import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivePackingPlacePageComponent } from './receive-packing-place-page.component';

describe('ReceivePackingPlacePageComponent', () => {
  let component: ReceivePackingPlacePageComponent;
  let fixture: ComponentFixture<ReceivePackingPlacePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReceivePackingPlacePageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivePackingPlacePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
