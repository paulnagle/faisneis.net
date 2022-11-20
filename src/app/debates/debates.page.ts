import { Component, OnInit } from '@angular/core';
import { DebatesService } from '../service/debates.service';
import { LoadingService } from '../service/loading.service';

@Component({
  selector: 'app-debates',
  templateUrl: './debates.page.html',
  styleUrls: ['./debates.page.scss'],
})
export class DebatesPage implements OnInit {

  results;
  myDate: string = new Date().toISOString();
  chamberType = 'dail';
  shownCard;
  minSelectableDate = '1922-01-01';
  maxSelectableDate = new Date().toISOString().split('T')[0];

  constructor(
    private debatesService: DebatesService,
    public loadingCtrl: LoadingService
  ) { }

  ngOnInit() {
    this.getAllDebates();
  }

  getAllDebates() {
    const year = this.myDate.substr(0, 4);
    const month = this.myDate.substr(5, 2);

    this.loadingCtrl.present('Loading...');
    this.debatesService.getAllDebates(year, month, this.chamberType).subscribe((data) => {
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
