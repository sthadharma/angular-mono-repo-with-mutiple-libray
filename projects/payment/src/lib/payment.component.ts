import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'es-payment',
  template: `
        hello yoyhoho
      <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class PaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
