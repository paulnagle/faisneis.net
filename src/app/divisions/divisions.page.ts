import { Component, OnInit } from '@angular/core';
import { DivisionsService } from '../service/divisions.service';
import { LoadingService } from '../service/loading.service';

@Component({
  selector: 'app-divisions',
  templateUrl: './divisions.page.html',
  styleUrls: ['./divisions.page.scss'],
})
export class DivisionsPage implements OnInit {
  results;
  myDate: string = new Date().toISOString();
  chamberType = 'dail';
  shownCard;
  minSelectableDate = '1922-01-01';
  maxSelectableDate = '2020-01-30';

  constructor(
    private divisionsService: DivisionsService,
    public loadingCtrl: LoadingService
  ) { }

  ngOnInit() {
    this.getAllDivisions();
  }

  getAllDivisions() {
    const year = this.myDate.substr(0, 4);
    const month = this.myDate.substr(5, 2);

    this.loadingCtrl.present('Loading...');
    this.divisionsService.getAllDivisions(year, month, this.chamberType).subscribe((data) => {
      this.results = data;
      this.loadingCtrl.dismiss();
      console.log(data);
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
