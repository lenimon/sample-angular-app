import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CurrencyMainService {
  private _url = 'https://api.fixer.io/latest';
  constructor(private _http: Http) { }

  getLatestConversionValues(baseCurrency, toSymbols=null){
    if(baseCurrency)
      return this._http.get(this._url+"?base="+baseCurrency+"&&symbols="+toSymbols.toString()).map((response: Response)=>response.json());
    else
      return this._http.get(this._url+"?base=USD"+"&&symbols="+toSymbols.toString()).map((response: Response)=>response.json());
  }
}
