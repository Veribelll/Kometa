import { ReturnRequestCreateFormComponent } from './return-request-create-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ReturnRequestCreateFormComponent', () => {
  let component: ReturnRequestCreateFormComponent;
  let fixture: ComponentFixture<ReturnRequestCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReturnRequestCreateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnRequestCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
