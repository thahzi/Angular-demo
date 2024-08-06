import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginemail:string=""
  loginpass:string=""

  constructor(private ds:DataService, private router:Router){}

  login(){
    this.ds.dsemail=this.loginemail
    this.ds.dspass= this.loginpass
    this.router.navigateByUrl('/dashboard')
  }
}
