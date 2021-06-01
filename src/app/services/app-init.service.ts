import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {SharedService } from '../shared/shared'
@Injectable()
export class AppInitService {

    constructor(private http: HttpClient,private shared: SharedService ){
    }
    Init(){
        return new Promise<void>((resolve, reject) =>{
            console.log("init calld")
            this.http.get('assets/conf/env-config.json')
            .subscribe((res: any)=> {
                if((res || {}).baseURL){
                    this.shared.setBaseUrl(res.baseURL);
                    resolve();
                }
            });
        });
    }
}