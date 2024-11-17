// paypal-script.service.ts

import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PayPalScriptService {
  // This is Rajesh account please replace with different clientId 
  private readonly scriptSrc = 'https://www.paypal.com/sdk/js?client-id=AbxGGIghpqYb4LbxlTPWOWE5TSswIuvSitYxiCgAd_wvQiPUM5tKV0nCsl7ElHZ-dCoYSQxsFydUJ2Jg';

  constructor(@Inject(DOCUMENT) private document: Document) {}

  loadPayPalScript(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const scriptElement = this.document.createElement('script');
      scriptElement.src = this.scriptSrc;

      scriptElement.onload = (event: Event) => resolve();
      scriptElement.onerror = (event: Event | string) => reject(event instanceof Event ? event : new Error(String(event)));

      this.document.body.appendChild(scriptElement);
    });
  }
}
