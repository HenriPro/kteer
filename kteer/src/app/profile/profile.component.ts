import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import  { DataService } from '../data.service';



@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css'],
	providers: []
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: []
})
export class ProfileComponent implements OnInit {

	data: Object[] = [];

	constructor(private dataService: DataService) { }

	ngOnInit() {

	}
}
