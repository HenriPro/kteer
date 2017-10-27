import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  selectedListings;

  constructor() { }

  ngOnInit() {
    this.selectedListings = [1, 3, 4, 5, 5, 3, 6, 4, 7];
  }

}
