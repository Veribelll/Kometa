import { EmexProductDetailFormComponent } from './emex-product-detail-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('EmexProductDetailFormComponent', () => {
  let component: EmexProductDetailFormComponent;
  let fixture: ComponentFixture<EmexProductDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmexProductDetailFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmexProductDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
