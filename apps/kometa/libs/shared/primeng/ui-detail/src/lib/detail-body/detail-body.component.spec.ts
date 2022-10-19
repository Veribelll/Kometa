import { DetailBodyComponent } from './detail-body.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('DetailBodyComponent', () => {
  let component: DetailBodyComponent;
  let fixture: ComponentFixture<DetailBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailBodyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
