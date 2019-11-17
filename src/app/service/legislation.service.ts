import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class LegislationService {



  constructor(public http: HttpClient) {
    console.log('Hello LegislationService Provider');
  }

  getApiUrlLegislation = 'https://api.oireachtas.ie/v1/legislation?bill_status=Current,Withdrawn,Enacted,Rejected,Defeated,Lapsed&bill_source=Government,Private%20Member&limit=1000&chamber_id=&lang=en';

  getAllLegislation(year) {

    interface LegislationResult {
      head: any;
      result: any;
    }

    const apiQuery: string = this.getApiUrlLegislation + '&bill_year=' + year;
    console.log('API QUERY = ', apiQuery);
    return this.http.get(apiQuery, { responseType: 'json' });
  }

}
