import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnlineserviceService } from '../onlineservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  status:string="";

  //use this class for navigation
  constructor(public ob:Router, public l:OnlineserviceService){
  }

  result:any;
  login(data:any)
  {
    this.l.userlogin(data).subscribe(c=>{ this.result = c.message[0].cnt
    if(this.result > 0)
      {
        sessionStorage.setItem("u",data.uname)
        this.ob.navigate(['products'])
      }
      else
      {
        this.status="invalid user"
      }

   });
   
  }

  validate(frm:any)
  {
    //let u=(document.getElementById("uid") as HTMLInputElement).value
    //let p=(document.getElementById("pwd") as HTMLInputElement).value
    // if(u=="admin" && p=="india123"){
    //   this.status="valid user"
    // }
    // else{
    //   this.status="invalid user"
    // }

    if(frm.uid=="admin" && frm.password=="india123")
      {
        this.status="valid user"
        this.ob.navigate(['products']) //This is a rediction to products page
        sessionStorage.setItem("u",frm.uid)
      }
      else{
        this.status="invalid user"
      }

  }
}
