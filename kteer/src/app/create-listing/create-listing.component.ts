import { Component, OnInit } from '@angular/core';

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

  constructor( ) {
  }

  ngOnInit() {
  }
  onSubmit() { 
    console.log(this.title, this.description, this.catagory, this.pricing)
  }
  

}
