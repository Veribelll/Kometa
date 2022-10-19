import { EmexAccountTableComponent } from './emex-account-table.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('EmexAccountTableComponent', () => {
  let component: EmexAccountTableComponent;
  let fixture: ComponentFixture<EmexAccountTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmexAccountTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmexAccountTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
