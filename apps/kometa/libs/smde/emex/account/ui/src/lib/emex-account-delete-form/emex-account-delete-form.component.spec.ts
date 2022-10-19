import { EmexAccountDeleteFormComponent } from './emex-account-delete-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('EmexAccountDeleteFormComponent', () => {
  let component: EmexAccountDeleteFormComponent;
  let fixture: ComponentFixture<EmexAccountDeleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmexAccountDeleteFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmexAccountDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
