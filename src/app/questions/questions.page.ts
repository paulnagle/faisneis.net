import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../service/questions.service';
import { LoadingService } from '../service/loading.service';
import * as xml2js from 'xml2js';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})

export class QuestionsPage implements OnInit {
  results;
  myDate: string = new Date().toISOString();
  questionType = 'written';
  shownCard;
  minSelectableDate = '1922-01-01';
  maxSelectableDate = '2020-01-30';
  XMLAnswerResult: any;

  constructor(
    private questionsService: QuestionsService,
    public loadingCtrl: LoadingService
  ) { }

  ngOnInit() {
    this.getAllQuestions();
  }

  getAllQuestions() {
    const year = this.myDate.substr(0, 4);
    const month = this.myDate.substr(5, 2);
    const day = this.myDate.substr(8, 2);

    this.loadingCtrl.present('Loading...');
    this.questionsService.getAllQuestions(year, month, day, this.questionType).subscribe((data) => {
      this.results = data;
      this.loadingCtrl.dismiss();
      console.log(data);
    });
  }

  getXMLAnswer(uri) {
    this.loadingCtrl.present('Loading...');
    this.questionsService.getAnswerXML(uri).subscribe((data) => {
      const parser = new xml2js.Parser({ strict: false, trim: true });
      var xmlResult;
      // tslint:disable-next-line: only-arrow-functions
      parser.parseString(data, function(e, r) { xmlResult = r; });
      console.log('XMLAnswer = : ', xmlResult);
      this.XMLAnswerResult = xmlResult;
      this.loadingCtrl.dismiss();
    });
  }

  toggleCard(card) {
    if (this.isCardShown(card)) {
      this.shownCard = null;
      this.XMLAnswerResult = null;
    } else {
      this.XMLAnswerResult = null;
      this.shownCard = card;
    }
  }

  isCardShown(card) {
    return this.shownCard === card;
  }
}