import { Component, OnInit } from '@angular/core';
import { PartiesService } from '../service/parties.service';
import { LoadingService } from '../service/loading.service';
@Component({
  selector: 'app-parties',
  templateUrl: './parties.page.html',
  styleUrls: ['./parties.page.scss'],
})
export class PartiesPage implements OnInit {

  results;
  result_num_dail;
  chamberType = 'dail';
  houseNo = '33';
  shownCard;

  constructor(
    private partiesService: PartiesService,
    public loadingCtrl: LoadingService) { }

  ngOnInit() {
    this.getAllParties();
    this.getNumDails();
  }

  getNumDails() {
    this.partiesService.getNumDails().subscribe((data) => {
      this.result_num_dail = data;
    });
  }

  getAllParties() {
    this.loadingCtrl.present('Loading...');
    this.partiesService.getAllParties(this.chamberType, this.houseNo).subscribe((data) => {
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
