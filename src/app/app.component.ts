import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./entity/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heading: string = "Черный список клиентов"

  users: User[] | undefined;
  user: User | undefined;

  userId: string = "";
  firstName: string = "";
  lastName: string = "";

  constructor(private http: HttpClient) {
    this.showAllUsers();
  }

  showAllUsers() {
    this.http.get<User[]>("http://localhost:8080/api/v1/blacklist").subscribe(result => {
      this.users = result;
      console.log(this.users)
    })
  }

  addUser() {
    const body = {firstName: this.firstName, lastName: this.lastName};
    return this.http.post("http://localhost:8080/api/v1/blacklist", body).subscribe();
  }

  updateUser() {
    const body = {id: this.userId, firstName: this.firstName, lastName: this.lastName};
    return this.http.post("http://localhost:8080/api/v1/blacklist", body).subscribe();
  }

  delete() {
    this.http.delete<User>("http://localhost:8080/api/v1/blacklist/" + this.userId).subscribe((result) => {
      this.user = result;
      console.log(this.user)
    })
  }

  refreshPage() {
    return window.location.reload();
  }
}
