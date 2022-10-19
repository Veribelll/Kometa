import { DadataAddressFieldComponent } from './dadata-address-field.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('DadataAddressFieldComponent', () => {
  let component: DadataAddressFieldComponent;
  let fixture: ComponentFixture<DadataAddressFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DadataAddressFieldComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadataAddressFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
