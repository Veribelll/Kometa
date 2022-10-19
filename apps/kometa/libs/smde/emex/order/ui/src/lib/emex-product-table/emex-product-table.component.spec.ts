import { EmexProductTableComponent } from './emex-product-table.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('EmexProductTableComponent', () => {
  let component: EmexProductTableComponent;
  let fixture: ComponentFixture<EmexProductTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmexProductTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmexProductTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
