import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentDetailsComponent } from './experiment-details.component';

describe('ExperimentDetailsComponent', () => {
  let component: ExperimentDetailsComponent;
  let fixture: ComponentFixture<ExperimentDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperimentDetailsComponent]
    });
    fixture = TestBed.createComponent(ExperimentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
