import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(public http: HttpClient) { }

  getApiUrQuestions = 'https://api.oireachtas.ie/v1/questions?';

  getAllQuestions(year, month, day, questionType) {

    let apiQuery: string = this.getApiUrQuestions;

    apiQuery += '&date_start=' + year + '-' + month + '-' + day + '&date_end=' + year + '-' + month + '-' + day;
    apiQuery += '&qtype=' + questionType;
    apiQuery += '&limit=5000';
    console.log('Questions API QUERY = ', apiQuery);
    return this.http.get(apiQuery, { responseType: 'json' });
  }

  getAnswerXML(uriParam) {

    // A cors proxy is running on faisneis.net port 3000
    const uri = 'https://faisneis.net:3000/' + uriParam;

    const XMLheaders = new HttpHeaders().set('Content-Type', 'text/xml').set('Accept', 'text/xml');
    return this.http.get(uri, { headers: XMLheaders, responseType: 'text' });
  }

}
