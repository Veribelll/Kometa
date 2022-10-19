import { DadataOrganizationNameFieldComponent } from './dadata-organization-name-field.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('DadataOrganizationNameFieldComponent', () => {
  let component: DadataOrganizationNameFieldComponent;
  let fixture: ComponentFixture<DadataOrganizationNameFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DadataOrganizationNameFieldComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadataOrganizationNameFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
