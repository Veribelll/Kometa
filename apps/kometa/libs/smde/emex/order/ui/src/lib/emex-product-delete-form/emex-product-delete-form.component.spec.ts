import { EmexProductDeleteFormComponent } from './emex-product-delete-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('EmexProductDeleteFormComponent', () => {
  let component: EmexProductDeleteFormComponent;
  let fixture: ComponentFixture<EmexProductDeleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmexProductDeleteFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmexProductDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
