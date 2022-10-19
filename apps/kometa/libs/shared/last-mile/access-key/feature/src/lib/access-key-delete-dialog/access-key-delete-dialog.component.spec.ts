import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessKeyDeleteDialogComponent } from './access-key-delete-dialog.component';

describe('AccessKeyDeleteDialogComponent', () => {
  let component: AccessKeyDeleteDialogComponent;
  let fixture: ComponentFixture<AccessKeyDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessKeyDeleteDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessKeyDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
