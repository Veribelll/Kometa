import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingPlaceSendDialogComponent } from './packing-place-send-dialog.component';

describe('PackingPlaceSendDialogComponent', () => {
  let component: PackingPlaceSendDialogComponent;
  let fixture: ComponentFixture<PackingPlaceSendDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackingPlaceSendDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingPlaceSendDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
