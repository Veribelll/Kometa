import { TopologyUpdateDialogComponent } from './topology-update-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('TopologyUpdateDialogComponent', () => {
  let component: TopologyUpdateDialogComponent;
  let fixture: ComponentFixture<TopologyUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopologyUpdateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopologyUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
