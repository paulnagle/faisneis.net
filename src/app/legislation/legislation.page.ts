import { Component, OnInit} from '@angular/core';
import { LegislationService } from '../service/legislation.service';
import { LoadingService } from '../service/loading.service';


@Component({
  selector: 'app-legislation',
  templateUrl: './legislation.page.html',
  styleUrls: ['./legislation.page.scss'],
})

export class LegislationPage implements OnInit {
  

  
  results;
  myDate: string = new Date().toISOString();
  shownCard;

  constructor(
    private legislationService: LegislationService,
    public loadingCtrl: LoadingService
  ) { }

  ngOnInit() {
    this.getAllLegislation();
  }


  getAllLegislation() {
    console.log('Year = ', this.myDate.substr(0, 4));
    interface LegislationResult {
      head: any;
      result: any;
    }

    this.loadingCtrl.present('Loading...');
    this.legislationService.getAllLegislation(this.myDate.substr(0, 4)).subscribe((data) => {
      this.results = data;
      this.loadingCtrl.dismiss();
    });
  }

  toggleCard(card) {
    if (this.isCardShown(card)) {
      this.shownCard = null;
    } else {
      this.shownCard = card;
    }
  }

  isCardShown(card) {
    return this.shownCard === card;
  }

}
