import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {SharedService } from '../'
@Injectable()
export class SharedService {
    baseUrl: any;
    constructor(private http: HttpClient) {
    }
    setBaseUrl(url: any) {
        this.baseUrl = url;
    }
    getBaseUrl() {
        return this.baseUrl;
    }
}