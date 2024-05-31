import { Component } from '@angular/core';
import { AbstractControl, FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
 fg:FormGroup;
  constructor()
 {
  this.fg = new FormGroup({
    username: new FormControl("admin",[Validators.required]),
    email: new FormControl("",[Validators.email]),
    message: new FormControl("",[Validators.maxLength(10)]),
    age: new FormControl("",[ageValidator])
  })
 }

 showdata(frm:any)
 {
  if(this.fg.valid){
    alert(frm.username + "\n" + frm.email + "\n" + frm.message);
  }
  else
  {
    alert("error occured");
  }
 }

}

export function ageValidator(txt: AbstractControl) {
  const data = parseInt(txt.value);
//alert(control.value)
  if(data >= 18){
  
    return null; //no error display
  }
  else{
    return {
      age:true
    }
  }
}
