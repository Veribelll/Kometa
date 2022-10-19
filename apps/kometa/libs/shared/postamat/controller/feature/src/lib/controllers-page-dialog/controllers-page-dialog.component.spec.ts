import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllersPageDialogComponent } from './controllers-page-dialog.component';

describe('ControllersPageDialogComponent', () => {
  let component: ControllersPageDialogComponent;
  let fixture: ComponentFixture<ControllersPageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControllersPageDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllersPageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
