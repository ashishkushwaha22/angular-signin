import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingAddressStepComponent } from './shipping-address-step.component';

describe('ShippingAddressStepComponent', () => {
  let component: ShippingAddressStepComponent;
  let fixture: ComponentFixture<ShippingAddressStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingAddressStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingAddressStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
