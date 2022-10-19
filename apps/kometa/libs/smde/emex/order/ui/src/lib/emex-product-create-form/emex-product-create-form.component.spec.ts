import { EmexProductCreateFormComponent } from './emex-product-create-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('EmexProductCreateFormComponent', () => {
  let component: EmexProductCreateFormComponent;
  let fixture: ComponentFixture<EmexProductCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmexProductCreateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmexProductCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
