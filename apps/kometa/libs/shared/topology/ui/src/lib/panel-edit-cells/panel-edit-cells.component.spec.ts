import { PanelEditCellsComponent } from './panel-edit-cells.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PanelEditCellsComponent', () => {
  let component: PanelEditCellsComponent;
  let fixture: ComponentFixture<PanelEditCellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelEditCellsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelEditCellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
