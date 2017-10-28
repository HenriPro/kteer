import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed: boolean = true;
  name: String;
  userId: String;


  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  constructor( private http: HttpClient ) {}

  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('/auth/userdata', {withCredentials: true}).subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
      this.userId = data['_id'];
      this.name = data['name'];
    },  err => {
      console.log('Something went wrong!', err);
    });
  }
}
