import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { PayeeDetails } from "../models/payeedetails.model";
import { PayPalScriptService } from "src/app/services/paypal-script.service";
import { PaymentService } from "src/app/services/payment.service";

// Declare global variable
declare global {
  interface Window {
    paypal: any;
  }
}

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.css"],
})
export class PaymentComponent implements OnInit {
  @ViewChild("paymentRef", { static: true }) paymentRef!: ElementRef;
  isPayeeDetailsPopupVisible: boolean = false;
  payeeDetails: PayeeDetails | null = null;

  constructor(
    private paymentService: PaymentService,
    private paypalScriptService: PayPalScriptService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    await this.paypalScriptService.loadPayPalScript();
    await this.paymentService.initializePayPalButton(
      () => {},
      () => {
        console.log("Payment error");
        // Add any additional logic for payment error
      }
    );

    // Type assertion to inform TypeScript that 'paypal' exists
    const paypal = (window as any).paypal;

    paypal
      .Buttons({
        style: {
          layout: "vertical",
          color: "blue",
          shape: "rect",
          label: "paypal",
        },
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "50",
                  currency_code: "USD",
                },
              },
            ],
          });
        },
        onApprove: (data: any, actions: any) => {
          return actions.order.capture().then((details: any) => {
            if (details.status === "COMPLETED") {
              const payeeDetails: PayeeDetails = {
                transactionId: details.id,
                payerId: details.payer.payer_id,
                status: details.status,
                payeeName: details.payer.name.given_name,
                email: details.purchase_units[0].payee.email_address,
                payerEmail: details.payer.email_address,
              };

              // Display the details in a popup
              this.showPayeeDetailsPopup(payeeDetails);
            }
          });
        },
        onError: (error: any) => {
          console.log(error);
        },
      })
      .render("#paypal-button-container");

    console.log((window as any).paypal);
  }

  showPayeeDetailsPopup(payeeDetails: PayeeDetails): void {
    // Logic to display a popup with CSS styling
    // You can use a library like Angular Material Dialog or create a custom modal component
    // For simplicity, let's assume you have a variable to control the visibility of the popup
    this.isPayeeDetailsPopupVisible = true;
    this.payeeDetails = payeeDetails;
  }

  closePayeeDetailsPopup(): void {
    this.isPayeeDetailsPopupVisible = false;
    // Additional logic, if needed, before navigating to the home page
    this.goTohome();
  }

  goTohome(): void {
    this.router.navigate(["/"]); // Assuming '/' is the route path for your home page
  }
}
