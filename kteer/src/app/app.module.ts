import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// must import each bootstrap component here
import { AlertModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselConfig } from 'ngx-bootstrap/carousel';


import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ListingsEntryComponent } from './listings-entry/listings-entry.component';

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'profile/:id', component: ProfileComponent },
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavbarComponent,
    LandingPageComponent,
    ListingsEntryComponent
  ],
  imports: [
    BrowserModule,
    // also add here
    AlertModule.forRoot(),
    AccordionModule.forRoot(),
    CarouselModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [{provide: CarouselConfig, useValue: {interval: 1500, noPause: true}}],
  bootstrap: [AppComponent]
})
export class AppModule {

}
