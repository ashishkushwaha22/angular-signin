import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicDetailsStepComponent } from './academic-details-step.component';

describe('AcademicDetailsStepComponent', () => {
  let component: AcademicDetailsStepComponent;
  let fixture: ComponentFixture<AcademicDetailsStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicDetailsStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicDetailsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
