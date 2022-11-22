import { Component, OnInit } from '@angular/core';
import { MembersService } from '../service/members.service';
import { PartiesService } from '../service/parties.service';
import { LoadingService } from '../service/loading.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {

  results;
  chamberType = 'dail';
  houseNo = '33';
  shownCard;
  result_num_dail;

  constructor(
    private membersService: MembersService,
    private partiesService: PartiesService,
    public loadingCtrl: LoadingService) { }


  ngOnInit() {
    this.getAllMembers();
    this.getNumDails();
  }

  getNumDails() {
    this.partiesService.getNumDails().subscribe((data) => {
      this.result_num_dail = data;
    });
  }

  getAllMembers() {

    this.loadingCtrl.present('Loading...');
    this.membersService.getAllMembers(this.houseNo, this.chamberType).subscribe((data) => {
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
