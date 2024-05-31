import { Component } from '@angular/core';
import { OnlineserviceService } from '../onlineservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css',
  providers:[OnlineserviceService]
})
export class BuyComponent {

  result:string="";
  pid:any;
  pname:any;
  pimage:any;
  price:any;
  hello:string="slk";
  qty:number=0;

  //using ActivatedRoute you can read query string from the current url.
  constructor(public obj:OnlineserviceService, public r:ActivatedRoute)
  {
    //http://localhost:4200/buy?a=p002&b=Washingmachine&c=12000&d=%2Fassets%2Fwashingmachine.jpg
    r.queryParamMap.subscribe(result=>{
      this.pid=result.get('a')
      this.pname=result.get('b')
      this.price=result.get('c')
      this.pimage=result.get('d')
    });

    this.result = obj.add(12,32);
  }

  placeorder()
{

  // alert('Test');
  var res={
    username:sessionStorage.getItem("u"),
        pid:this.pid,
        transdate:new Date(),
        qty:this.qty
  }
  this.obj.buy(res).subscribe(c=> alert(c.message))

}

  hi()
  {
    this.obj.add(10,30);
  }
}
