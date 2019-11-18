import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DebatesService {

  constructor(public http: HttpClient) {
    console.log('Hello LegislationService Provider');
  }

  getApiUrDebates = 'https://api.oireachtas.ie/v1/debates?';

  getAllDebates(year, chamber, chamberType) {

    let apiQuery: string = this.getApiUrDebates;
    apiQuery += 'chamber_type=' + chamberType;   //  House or committee
    apiQuery += '&chamber=' + chamber;   // Dail or seand for House
    apiQuery += '&chamber_id=';
    apiQuery += '&debateSections=';
    apiQuery += '&date_start=' + year + '-01-01&date_end=' + year + '-12-31';
    apiQuery += '&limit=500';
    console.log('API QUERY = ', apiQuery);
    return this.http.get(apiQuery, { responseType: 'json' });
  }

}
