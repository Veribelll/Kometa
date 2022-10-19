import { PanelEditSectionsComponent } from './panel-edit-sections.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PanelEditSectionsComponent', () => {
  let component: PanelEditSectionsComponent;
  let fixture: ComponentFixture<PanelEditSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelEditSectionsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelEditSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
