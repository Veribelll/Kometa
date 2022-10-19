import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessKeysPageComponent } from './access-keys-page.component';

describe('AccessKeysPageComponent', () => {
  let component: AccessKeysPageComponent;
  let fixture: ComponentFixture<AccessKeysPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccessKeysPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessKeysPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
