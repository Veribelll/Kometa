import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmexOrdersPageComponent } from './emex-orders-page.component';

describe('EmexOrdersPageComponent', () => {
  let component: EmexOrdersPageComponent;
  let fixture: ComponentFixture<EmexOrdersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmexOrdersPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmexOrdersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
