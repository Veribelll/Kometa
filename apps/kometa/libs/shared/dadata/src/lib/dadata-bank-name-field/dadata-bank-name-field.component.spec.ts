import { DadataBankNameFieldComponent } from './dadata-bank-name-field.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('DadataBankNameFieldComponent', () => {
  let component: DadataBankNameFieldComponent;
  let fixture: ComponentFixture<DadataBankNameFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DadataBankNameFieldComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadataBankNameFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
