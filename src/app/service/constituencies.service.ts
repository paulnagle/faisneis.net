import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConstituenciesService {

  constructor(public http: HttpClient) {
    console.log('Hello LegislationService Provider');
  }

  getApiUrConstituencies = 'https://api.oireachtas.ie/v1/constituencies?chamber_id=&chamber=';

  getAllConstituencies(chamberType, houseNo) {

    let apiQuery: string = this.getApiUrConstituencies;

    apiQuery += chamberType;   // Dail or seand
    apiQuery += '&house_no=' + houseNo;

    console.log('CONSTITUENCIES API QUERY = ', apiQuery);
    return this.http.get(apiQuery, { responseType: 'json' });
  }
}
