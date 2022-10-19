import { TenantsPageComponent } from './tenants-page.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('TenantsPageComponent', () => {
  let component: TenantsPageComponent;
  let fixture: ComponentFixture<TenantsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TenantsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
