import { TopologyUpdateFormComponent } from './topology-update-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('TopologyUpdateFormComponent', () => {
  let component: TopologyUpdateFormComponent;
  let fixture: ComponentFixture<TopologyUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopologyUpdateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopologyUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
