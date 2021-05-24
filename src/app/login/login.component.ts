import {Component, OnInit} from '@angular/core';
import {Router, Routes} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  url: string = "http://localhost:8080/api/v1/blacklist";
  login: string = "";
  password: string = "";
  admin: Object | undefined;
  isInvalid: boolean = false;

  constructor(private router: Router, private http: HttpClient) {
  }

  ngOnInit() {
  }

  handleLogin() {
    this.http.get(this.url + "/" + this.login + "/" + this.password).subscribe(result =>{
    this.admin = result;
    console.log(this.admin)
    if (this.admin !== null)    {
      console.log('this.admin - ' + this.admin);
      this.isInvalid = false;
      this.router.navigate(['admin', this.login]);
    } else {
      this.isInvalid = true;
    }
    });
  }
}
