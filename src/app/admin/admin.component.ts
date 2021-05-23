import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../entity/user";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  title: string = "Черный список клиентов"
  url: string = "http://localhost:8080/api/v1/blacklist";
  users: User[] | undefined;
  user: User | undefined;

  userId: string = "";
  firstName: string = "";
  lastName: string = "";


  constructor(private http: HttpClient) {
    this.showAllUsers();
  }

  showAllUsers() {
    this.http.get<User[]>(this.url).subscribe(result => {
      this.users = result;
      console.log(this.users)
    })
  }

  addUser() {
    const body = {firstName: this.firstName, lastName: this.lastName};
    return this.http.post(this.url, body).subscribe();
  }

  updateUser() {
    const body = {id: this.userId, firstName: this.firstName, lastName: this.lastName};
    return this.http.post(this.url, body).subscribe();
  }

  delete() {
    this.http.delete<User>(this.url + "/" + this.userId).subscribe((result) => {
      this.user = result;
      console.log(this.user)
    })
  }

  refreshPage() {
    return window.location.reload();
  }

  ngOnInit() {
  }
}
