import { Component, Output, output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  childmsg:string='';
  mydata:string="good morning students...";

  readmessagefromchild(data:any)
  {
    this.childmsg = data;
  }
}
