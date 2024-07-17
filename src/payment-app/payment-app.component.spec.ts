import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAppComponent } from './payment-app.component';

describe('PaymentAppComponent', () => {
  let component: PaymentAppComponent;
  let fixture: ComponentFixture<PaymentAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
