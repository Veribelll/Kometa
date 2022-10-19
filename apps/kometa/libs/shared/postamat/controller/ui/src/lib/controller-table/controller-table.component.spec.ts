import { ControllerTableComponent } from './controller-table.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ControllerTableComponent', () => {
  let component: ControllerTableComponent;
  let fixture: ComponentFixture<ControllerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControllerTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
