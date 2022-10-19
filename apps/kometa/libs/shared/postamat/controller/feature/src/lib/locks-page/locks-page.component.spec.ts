import { LocksPageComponent } from './locks-page.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('LocksPageComponent', () => {
  let component: LocksPageComponent;
  let fixture: ComponentFixture<LocksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocksPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
