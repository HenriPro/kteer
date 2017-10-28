import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()

export class DataService {

  authToken: any;

  constructor(private _http: Http) { }

  options = new RequestOptions({
    headers: new Headers( {'Content-Type': 'application/json;charset=UTF-8'} )
  })

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    if(localStorage.getItem('id_token').length){
      return true
    }
    else{
      return false
    }
  }

  getUser() {
    // ??
    //todo
  }

  getListings() {
    return this._http.get('/api/listings')
    .map(result => result.json().data );
  }

  addListing(data) {
    this._http.post('/api/listings', JSON.stringify(data), this.options)
    .map((res: Response) => res.json() )
  }

  getContracts() {
    return this._http.get('/api/contracts')
    .map( result => result.json().data )
  }

  addContract(data) {
    this._http.post('/api/contracts', JSON.stringify(data), this.options)
    .map((res: Response) =>  res.json() )
  }

  getReviews() {
    return this._http.get('/api/reviews')
    .map( result => result.json().data )
  }

  addReview(data) {
    this._http.post('/api/reviews', JSON.stringify(data), this.options)
    .map((res: Response) =>  res.json() )
  }
}

/*
example: getting listings
    let listings;
    dataService.getListings()
    .subscribe(result => this.listings = result )
*/