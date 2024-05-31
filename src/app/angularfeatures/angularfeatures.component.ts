import { Component } from '@angular/core';

@Component({
  selector: 'app-angularfeatures',
  templateUrl: './angularfeatures.component.html',
  styleUrl: './angularfeatures.component.css'
})
export class AngularfeaturesComponent {

b:boolean=false;
type:number=2;
countries:string[]=["India","uk","us","japan","swiz"]

show()
{
  this.b =!this.b
}

}
