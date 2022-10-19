import { SecuredImageComponent } from './secured-image.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SecuredImageComponent', () => {
  let component: SecuredImageComponent;
  let fixture: ComponentFixture<SecuredImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecuredImageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuredImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
