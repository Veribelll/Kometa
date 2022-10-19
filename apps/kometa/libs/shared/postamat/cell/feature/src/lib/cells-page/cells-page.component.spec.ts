import { CellsPageComponent } from './cells-page.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('CellsPageComponent', () => {
  let component: CellsPageComponent;
  let fixture: ComponentFixture<CellsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CellsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
