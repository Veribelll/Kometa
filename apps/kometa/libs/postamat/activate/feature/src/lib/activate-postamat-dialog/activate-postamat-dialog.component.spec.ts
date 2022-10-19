import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatePostamatDialogComponent } from './activate-postamat-dialog.component';

describe('ActivatePostamatDialogComponent', () => {
  let component: ActivatePostamatDialogComponent;
  let fixture: ComponentFixture<ActivatePostamatDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActivatePostamatDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatePostamatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
