import { Component, OnInit } from '@angular/core';
import { MembersService } from '../service/members.service';
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

  constructor(
    private membersService: MembersService,
    public loadingCtrl: LoadingService) { }


  ngOnInit() {
    this.getAllMembers();
  }

  getAllMembers() {

    this.loadingCtrl.present('Loading...');
    this.membersService.getAllMembers(this.houseNo, this.chamberType).subscribe((data) => {
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
