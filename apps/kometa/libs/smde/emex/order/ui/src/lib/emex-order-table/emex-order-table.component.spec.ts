import { EmexOrderTableComponent } from './emex-order-table.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('EmexOrderTableComponent', () => {
  let component: EmexOrderTableComponent;
  let fixture: ComponentFixture<EmexOrderTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmexOrderTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmexOrderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
