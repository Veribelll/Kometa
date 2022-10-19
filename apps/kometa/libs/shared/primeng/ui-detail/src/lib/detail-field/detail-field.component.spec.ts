import { DetailFieldComponent } from './detail-field.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('DetailFieldComponent', () => {
  let component: DetailFieldComponent;
  let fixture: ComponentFixture<DetailFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailFieldComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
