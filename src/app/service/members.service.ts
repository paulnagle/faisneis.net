import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(public http: HttpClient) {

  }
  getApiMembers = 'https://api.oireachtas.ie/v1/members?limit=500';

  getAllMembers(houseNo, chamberType) {

    let apiQuery: string = this.getApiMembers;

    apiQuery += '&chamber=' + chamberType;   // Dail or seand
    apiQuery += '&house_no=' + houseNo;

    console.log('Members API QUERY = ', apiQuery);
    return this.http.get(apiQuery, { responseType: 'json' });
  }

}
