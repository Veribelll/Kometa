import { LockTableComponent } from './lock-table.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('LockTableComponent', () => {
  let component: LockTableComponent;
  let fixture: ComponentFixture<LockTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LockTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LockTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
