import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessKeyDetailDialogComponent } from './access-key-detail-dialog.component';

describe('AccessKeyDetailDialogComponent', () => {
  let component: AccessKeyDetailDialogComponent;
  let fixture: ComponentFixture<AccessKeyDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessKeyDetailDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessKeyDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
