import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Below displayed are 3 instances of a currency converter component:';
  note = 'Note: Data is fetched from fixer.io. Conversion rates are restricted to CAD, EUR and USD as per the requirements. "Converted amount" field is non editable as conversions are one way as per design. Disclaimer link is now directing to an external exchange-rate website.'
}
