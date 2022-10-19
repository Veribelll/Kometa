import { TableCaptionComponent } from './table-caption.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('TableCaptionComponent', () => {
  let component: TableCaptionComponent;
  let fixture: ComponentFixture<TableCaptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableCaptionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
