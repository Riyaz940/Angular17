import { Component } from '@angular/core';
import { OnlineserviceService } from '../onlineservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [OnlineserviceService]
})
export class RegisterComponent {

  constructor(public obje:OnlineserviceService){}
  validate(frm:any)
  {
    this.obje.Addnewuser(frm).subscribe(result=>alert(result.message))

  }
}
