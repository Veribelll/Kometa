import { TemplatesPostamatComponent } from './templates-postamat.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('TemplatesPostamatComponent', () => {
  let component: TemplatesPostamatComponent;
  let fixture: ComponentFixture<TemplatesPostamatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplatesPostamatComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesPostamatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
