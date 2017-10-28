import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.css']
})
export class CreateListingComponent implements OnInit {
  public title: String;
  public description: string;
  public catagory: string;
  public pricing: number;
  public ownerId: string;

  constructor( private _dataService: DataService, private _router:Router) {
  }

  ngOnInit() {
  }
  onSubmit() { 
    console.log(this.title, this.description, this.catagory, this.pricing);
    this._dataService.addListing( { title : this.title,
                              description : this.description,
                              catagory : this.catagory,
                              pricing: this.pricing,
                              owner: "Henri Pietilä"}).subscribe(result => {
                                                                      console.log( result );
                                                                      this._router.navigate(['']) });
  }
  

}
