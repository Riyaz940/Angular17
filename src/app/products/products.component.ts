import { Component } from '@angular/core';
import { OnlineserviceService, IProd } from '../onlineservice.service';
import { DiscountPipe } from '../discount.pipe';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers:[OnlineserviceService]
})
export class ProductsComponent {


  Isvisible:boolean=true;
  displayHideShow()
  {
    this.Isvisible=!this.Isvisible;
  }

    prod:IProd[]=[];
 constructor(public ob:OnlineserviceService)
 {
  //this.prod = ob.prod;
  ob.showproduct().subscribe(result => this.prod = result)
 }

}
