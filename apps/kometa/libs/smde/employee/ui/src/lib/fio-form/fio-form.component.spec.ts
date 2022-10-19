import { FioFormComponent } from './fio-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('FioFormComponent', () => {
  let component: FioFormComponent;
  let fixture: ComponentFixture<FioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FioFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
