import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loginRef = new FormGroup({
    email: new FormControl(),
    pass: new FormControl()
    
    })

     msg:string="";
     logDet:Array<LoginService>=[]
  constructor() { }

  ngOnInit(): void {
  }
  createAccount(){
    let login = this.loginRef.value;
    let l = {email:login.email, pass:login.pass}; 
    let result = this.logDet.find(obj=>obj.email==l.email);
    if(result==undefined){
    this.logDet.push(l);
    sessionStorage.setItem("loginInfo", JSON.stringify(this.logDet));
   this.msg="Your Account has been created successfully";
  }else{
    this.msg="Please provide unique email id";
  }
  this.loginRef.reset();
}



}
