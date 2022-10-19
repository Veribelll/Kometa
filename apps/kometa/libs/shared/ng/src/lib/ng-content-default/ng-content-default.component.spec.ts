import { NgContentDefaultComponent } from './ng-content-default.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('NgContentDefaultComponent', () => {
  let component: NgContentDefaultComponent;
  let fixture: ComponentFixture<NgContentDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgContentDefaultComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
