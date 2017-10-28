import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';


// must import each bootstrap component here also down at imports
import { AlertModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselConfig } from 'ngx-bootstrap/carousel';


//Data service
import { DataService } from './data.service';

// components are auto added when using angular cli
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ListingsEntryComponent } from './listings-entry/listings-entry.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import { CreateListingComponent } from './create-listing/create-listing.component';

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'details/:id', component: ListingDetailsComponent},
  { path: 'create-listing', component: CreateListingComponent},
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavbarComponent,
    LandingPageComponent,
    ListingsEntryComponent,
    ListingDetailsComponent,
    CreateListingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    // also add here
    AlertModule.forRoot(),
    AccordionModule.forRoot(),
    CarouselModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [{provide: CarouselConfig, useValue: {interval: 1500, noPause: true}}, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
