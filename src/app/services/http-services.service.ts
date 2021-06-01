import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared/shared'
@Injectable()
export class HttpService {
    baseUrl: any;
    constructor(private http: HttpClient,private shared: SharedService ) {
        this.baseUrl = this.shared.getBaseUrl();
    }

    getCardsList(data:any) {
        console.log(data.gameId, data.userId);
        return this.http.get(`${this.baseUrl}/games/${data.gameId}/players/${data.userId}`);
    }
    login(data:any){
        return this.http.post(`${this.baseUrl}/authenticate`,data);
    }
    register(data:any){
        return this.http.post(`${this.baseUrl}/users`,data);
    }
    selectStat(data:any){
        return this.http.post(`${this.baseUrl}/selectstat`,data);
    }
    getHomeData(data:any){
        return this.http.get(`${this.baseUrl}/players/${data}/home`);
    }
    inviteFriend(data: any){
        return this.http.post(`${this.baseUrl}/inviteFriend`,data);
    }
    joinGame(data: any){
        return this.http.get(`${this.baseUrl}${data}`);
    }
}