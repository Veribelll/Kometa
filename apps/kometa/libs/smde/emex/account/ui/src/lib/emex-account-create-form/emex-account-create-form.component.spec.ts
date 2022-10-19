import { EmexAccountCreateFormComponent } from './emex-account-create-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('EmexAccountCreateFormComponent', () => {
  let component: EmexAccountCreateFormComponent;
  let fixture: ComponentFixture<EmexAccountCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmexAccountCreateFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmexAccountCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
