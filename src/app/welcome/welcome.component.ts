import { Component, OnInit } from '@angular/core';
import {User} from "../entity/user";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  heading: string = "Черный список клиентов"
  url: string = "http://localhost:8080/api/v1/blacklist";
  users: User[] | undefined;

  constructor(private http: HttpClient) {
    this.showAllUsers()
  }

  showAllUsers() {
    this.http.get<User[]>(this.url).subscribe(result => {
      this.users = result;
      console.log(this.users)
    })
  }

  ngOnInit(): void {
  }

}
