import { ReturnRequestsPageComponent } from './return-requests-page.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ReturnRequestsPageComponent', () => {
  let component: ReturnRequestsPageComponent;
  let fixture: ComponentFixture<ReturnRequestsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReturnRequestsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnRequestsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
