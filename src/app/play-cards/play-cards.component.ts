import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http-services.service';
import { SharedService } from '../shared/shared';
import { IMAGE_S3_BUCKET_URL } from '../utils/constants';
import { interval } from 'rxjs';
import{ ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-play-cards',
  templateUrl: './play-cards.component.html',
  styleUrls: ['./play-cards.component.scss']
})
export class PlayCardsComponent implements OnInit {
  cardObj:any = {};
  imgConnection : any = IMAGE_S3_BUCKET_URL;
  intervalId: any;
  gameRef: any;
  defaultImage: string = "assets/images/player.png";
  constructor(private shared: SharedService,
    private api : HttpService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.gameRef = atob(params.gameRef);
      console.log("gameRef", this.gameRef)
    });
    this.fetchCards();
    this.intervalId = setInterval( ()=> { 
     this.fetchCards();    
  }, 5000);

   
   console.log("imgConnection0", this.imgConnection)
  }

  play(type: string) {
    let payload = {
      gameId: localStorage.getItem('gameId'),
      playerId: this.cardObj.playerInfo.playerId,
      position: parseInt(type)
    }
    this.api.selectStat(payload).subscribe((res: any) => {
      this.fetchCards();
    })
  }

  fetchCards() {
    let data = {
      gameId: localStorage.getItem("gameId"),
      userId: localStorage.getItem("userId")
    }
    this.api.joinGame(this.gameRef).subscribe((res: any) => {
      this.cardObj = res;
  });
    // this.api.getCardsList(data).subscribe((res: any) => {
    //   this.cardObj = res;
    // })
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
  goHome(){
    this.router.navigate(['/homePage']);
  }
}
