// payment.service.ts

import { Injectable } from '@angular/core';
import { PayPalScriptService } from './paypal-script.service';
declare const paypal: any;

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private readonly clientId = 'YOUR_CLIENT_ID';

  constructor(private paypalScriptService: PayPalScriptService) {}

  async initializePayPalButton(onSuccess: () => void, onError: () => void): Promise<void> {
    await this.paypalScriptService.loadPayPalScript();
    // Now, paypal should be globally available

    // paypal.Buttons({
    //   // Your existing PayPal configuration...
    // }).render('#paypal-button-container');
  }
}
