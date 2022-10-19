import { ControllersPageComponent } from './controllers-page.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ControllersPageComponent', () => {
  let component: ControllersPageComponent;
  let fixture: ComponentFixture<ControllersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControllersPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
