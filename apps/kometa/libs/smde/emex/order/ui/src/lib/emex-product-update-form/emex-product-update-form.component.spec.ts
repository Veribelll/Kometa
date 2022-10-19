import { EmexProductUpdateFormComponent } from './emex-product-update-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('EmexProductUpdateFormComponent', () => {
  let component: EmexProductUpdateFormComponent;
  let fixture: ComponentFixture<EmexProductUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmexProductUpdateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmexProductUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
