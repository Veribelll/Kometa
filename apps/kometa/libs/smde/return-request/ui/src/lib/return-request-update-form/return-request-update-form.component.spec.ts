import { ReturnRequestUpdateFormComponent } from './return-request-update-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ReturnRequestUpdateFormComponent', () => {
  let component: ReturnRequestUpdateFormComponent;
  let fixture: ComponentFixture<ReturnRequestUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReturnRequestUpdateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnRequestUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
