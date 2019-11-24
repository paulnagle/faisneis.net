import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DivisionsService {

  constructor(public http: HttpClient) { }

  getApiUrDivision = 'https://api.oireachtas.ie/v1/divisions?';

  getAllDivisions(year, month, chamberType) {

    let apiQuery: string = this.getApiUrDivision;
    if (chamberType === 'dail' || chamberType === 'seanad') {
      apiQuery += 'chamber_type=house';   //  House or committee
      apiQuery += '&chamber=' + chamberType;   // Dail or seand for House
    } else {
      apiQuery += 'chamber_type=' + chamberType;   //  House or committee
    }

    apiQuery += '&chamber_id=';
    apiQuery += '&date_start=' + year + '-' + month + '-01&date_end=' + year + '-' + month + '-31';
    apiQuery += '&limit=5000';
    console.log('API QUERY = ', apiQuery);
    return this.http.get(apiQuery, { responseType: 'json' });
  }

}
