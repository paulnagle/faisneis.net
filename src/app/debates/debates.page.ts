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
  chamberType = 'committee';
  chamber = 'dail';
  shownCard;

  constructor(
    private debatesService: DebatesService,
    public loadingCtrl: LoadingService
  ) { }

  ngOnInit() {
    this.getAllDebates();
  }

  getAllDebates() {
    console.log('Year = ', this.myDate.substr(0, 4));

    this.loadingCtrl.present('Loading...');
    this.debatesService.getAllDebates(this.myDate.substr(0, 4), this.chamber, this.chamberType).subscribe((data) => {
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
