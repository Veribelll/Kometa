import { SelectContractorsFieldComponent } from './select-contractors-field.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SelectContractorsFieldComponent', () => {
  let component: SelectContractorsFieldComponent;
  let fixture: ComponentFixture<SelectContractorsFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectContractorsFieldComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectContractorsFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
