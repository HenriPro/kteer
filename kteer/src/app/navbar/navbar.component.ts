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
  userId: string;
  loged = true;


  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  constructor( private http: HttpClient ) {}

  ngOnInit(): void {
    this.getUser()
  }
  getUser(){
    // Make the HTTP request:
    this.http.get('/auth/userdata', {withCredentials: true}).subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);

      localStorage.setItem('loggedIn', JSON.stringify(this.loged));
      localStorage.setItem('userId', this.userId);
      this.userId = data['_id'];
      localStorage.setItem('user-name', name);
      this.name = data['name'];
    },  err => {
      console.log('Something went wrong!', err);
    });
  }
}
