import { EmexAccountDetailFormComponent } from './emex-account-detail-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('EmexAccountDetailFormComponent', () => {
  let component: EmexAccountDetailFormComponent;
  let fixture: ComponentFixture<EmexAccountDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmexAccountDetailFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmexAccountDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
