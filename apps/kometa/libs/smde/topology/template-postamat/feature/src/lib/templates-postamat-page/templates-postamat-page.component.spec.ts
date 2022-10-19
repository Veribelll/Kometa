import { TemplatesPostamatPageComponent } from './templates-postamat-page.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('TemplatesPostamatPageComponent', () => {
  let component: TemplatesPostamatPageComponent;
  let fixture: ComponentFixture<TemplatesPostamatPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplatesPostamatPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesPostamatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
