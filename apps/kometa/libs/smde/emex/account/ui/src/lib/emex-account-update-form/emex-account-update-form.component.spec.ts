import { EmexAccountUpdateFormComponent } from './emex-account-update-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('EmexAccountUpdateFormComponent', () => {
  let component: EmexAccountUpdateFormComponent;
  let fixture: ComponentFixture<EmexAccountUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmexAccountUpdateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmexAccountUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
