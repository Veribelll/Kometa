import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessKeysDialogComponent } from './access-keys-dialog.component';

describe('AccessKeysDialogComponent', () => {
  let component: AccessKeysDialogComponent;
  let fixture: ComponentFixture<AccessKeysDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessKeysDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessKeysDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
