import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessKeyUpdateDialogComponent } from './access-key-update-dialog.component';

describe('AccessKeyUpdateDialogComponent', () => {
  let component: AccessKeyUpdateDialogComponent;
  let fixture: ComponentFixture<AccessKeyUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessKeyUpdateDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessKeyUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
