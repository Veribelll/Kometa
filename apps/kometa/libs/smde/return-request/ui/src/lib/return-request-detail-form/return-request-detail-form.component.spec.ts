import { ReturnRequestDetailFormComponent } from './return-request-detail-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ReturnRequestDetailFormComponent', () => {
  let component: ReturnRequestDetailFormComponent;
  let fixture: ComponentFixture<ReturnRequestDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReturnRequestDetailFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnRequestDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
