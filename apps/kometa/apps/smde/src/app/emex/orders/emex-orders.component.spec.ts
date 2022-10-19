import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmexOrdersComponent } from './emex-orders.component';

describe('EmexOrdersComponent', () => {
  let component: EmexOrdersComponent;
  let fixture: ComponentFixture<EmexOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmexOrdersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmexOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
