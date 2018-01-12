import { Component, OnInit } from '@angular/core';
import { CurrencyMainService } from 'app/currency-converter/main.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss'],
  providers:[CurrencyMainService]

})
export class CurrencyConverterComponent implements OnInit {

  baseCurrencies:any=["CAD","EUR","USD"];
  data:any;
  selectedBaseCurrency: String="CAD";
  selectedToCurrency: String="CAD";

  constructor(private mainService: CurrencyMainService) { }

  ngOnInit() {
    this.mainService.getLatestConversionValues(this.selectedBaseCurrency, this.baseCurrencies).subscribe(data=> { 
      this.data=data;
    });
  }

  onSelectBaseCurrencyType(value, fromField, toField){
    this.selectedBaseCurrency=value;
    this.mainService.getLatestConversionValues(this.selectedBaseCurrency, this.baseCurrencies).subscribe(data=> { 
      this.data=data;
      this.onCurrencyValueChange(fromField, this.selectedToCurrency, toField);
    });
  }
  onSelectToCurrencyType(value, toField, fromField){
    this.selectedToCurrency=value;
    this.onCurrencyValueChange(fromField, this.selectedToCurrency, toField);
  }

  onCurrencyValueChange(fromField, toCurrency, toField){
    if(this.selectedBaseCurrency==this.selectedToCurrency){
      toField.value=fromField.value;
    }else if(this.data.rates[toCurrency]){
      toField.value=fromField.value*this.data.rates[toCurrency]
    }else{
      toField.value=null;
    }
  }
}
