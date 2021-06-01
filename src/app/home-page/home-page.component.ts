import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  friendsList:Array<any> = [];
  gameRequests:Array<any> = [];
  gameHistory:Array<any> = [];
  userName: any;
  intervalId: any;
  constructor(private api: HttpService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.fetchHomeData();
    this.intervalId = setInterval( ()=> { 
      this.fetchHomeData();    
   }, 5000);
  }
fetchHomeData(){
  let userId = localStorage.getItem('userId');
  this.api.getHomeData(userId).subscribe((res: any) => {
    this.friendsList = res.friends;
    this.gameRequests = res.gameRequests;
    this.gameHistory = res.gameHistory;
    this.userName = res.player.userName; 
  })
}
invite(user: any){
let inviteData = {
  player1Id: JSON.parse(localStorage.getItem('userId') || '{}'),
  player2Id: user.userId
}
this.api.inviteFriend(inviteData).subscribe((res: any) => {
  let gameid = res.gameUrl.split("/")[2];
  localStorage.setItem("gameId", gameid);
  let encodeGameRef = btoa(res.gameUrl);
   this.router.navigate(['/playCards', encodeGameRef]);
})
}
join(user:any){
  localStorage.setItem("gameId", user.gameId);
  let encodeGameRef = btoa(user.gameRef);
   this.router.navigate(['/playCards', encodeGameRef]);
}
ngOnDestroy() {
  clearInterval(this.intervalId);
}
}
