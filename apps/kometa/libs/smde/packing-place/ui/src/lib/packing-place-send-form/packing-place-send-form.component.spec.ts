import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingPlaceSendFormComponent } from './packing-place-send-form.component';

describe('PackingPlaceSendFormComponent', () => {
  let component: PackingPlaceSendFormComponent;
  let fixture: ComponentFixture<PackingPlaceSendFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackingPlaceSendFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingPlaceSendFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
