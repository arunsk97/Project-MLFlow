import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LnavComponent } from './lnav.component';

describe('LnavComponent', () => {
  let component: LnavComponent;
  let fixture: ComponentFixture<LnavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LnavComponent]
    });
    fixture = TestBed.createComponent(LnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
