import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } 				from '@angular/common';
import { DataService } from '../data.service';
import 'rxjs/add/operator/switchMap';


@Component({    
    selector: 'listing-details',
    templateUrl: './listing-details.component.html',
    styleUrls: [],
})

export class ListingDetailsComponent implements OnInit {

    constructor(
        private _dataService: DataService,
        private _route: ActivatedRoute,
        private _location: Location
    ) { }
    
    listing: any;
    contracts: any;
    
    ngOnInit() {
        this._route.paramMap
		.switchMap((params: ParamMap) => this._dataService.getListing(+params.get('id')))
		.subscribe( listing => {
			//getting listing's posts
			this._dataService.getContractsForId(listing._id)
			.subscribe(result => this.contracts = result)
			return this.listing = listing;
		})
    }

}