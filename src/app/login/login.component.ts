import {Component, OnInit} from '@angular/core';
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  isInvalid: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  handleLogin() {
    if (this.username === "Admin" && this.password === "Admin") {
      this.isInvalid = false;
      this.router.navigate(['admin', this.username]);
    } else {
      this.isInvalid = true;
    }
  }
}
