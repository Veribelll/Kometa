import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessKeyCreateDialogComponent } from './access-key-create-dialog.component';

describe('AccessKeyCreateDialogComponent', () => {
  let component: AccessKeyCreateDialogComponent;
  let fixture: ComponentFixture<AccessKeyCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessKeyCreateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessKeyCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
