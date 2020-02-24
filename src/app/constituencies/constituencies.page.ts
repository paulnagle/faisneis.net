import { Component, OnInit } from '@angular/core';
import { ConstituenciesService } from '../service/constituencies.service';
import { LoadingService } from '../service/loading.service';

@Component({
  selector: 'app-constituencies',
  templateUrl: './constituencies.page.html',
  styleUrls: ['./constituencies.page.scss'],
})
export class ConstituenciesPage implements OnInit {

  results;
  chamberType = 'dail';
  houseNo = '33';
  shownCard;

  constructor(
    private constituenciesService: ConstituenciesService,
    public loadingCtrl: LoadingService) { }


  ngOnInit() {
    this.getAllConstituencies();
  }

  getAllConstituencies() {

    this.loadingCtrl.present('Loading...');
    this.constituenciesService.getAllConstituencies(this.chamberType, this.houseNo).subscribe((data) => {
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
