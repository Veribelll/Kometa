import { ReturnRequestTableComponent } from './return-request-table.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ReturnRequestTableComponent', () => {
  let component: ReturnRequestTableComponent;
  let fixture: ComponentFixture<ReturnRequestTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReturnRequestTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnRequestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
