import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessKeyTableComponent } from './access-key-table.component';

describe('AccessKeyTableComponent', () => {
  let component: AccessKeyTableComponent;
  let fixture: ComponentFixture<AccessKeyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessKeyTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessKeyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
