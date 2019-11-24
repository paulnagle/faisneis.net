import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartiesService {

  constructor(public http: HttpClient) {

  }

  getApiUrParties = 'https://api.oireachtas.ie/v1/parties?chamber_id=&chamber=';

  getAllParties(chamberType, houseNo) {

    let apiQuery: string = this.getApiUrParties;

    apiQuery += chamberType;   // Dail or seand
    apiQuery += '&house_no=' + houseNo;

    console.log('PARTIES API QUERY = ', apiQuery);
    return this.http.get(apiQuery, { responseType: 'json' });
  }

}
