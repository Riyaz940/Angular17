import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProd, OnlineserviceService } from '../onlineservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchText:string="";

  prod:IProd[]=[]
  data:any;
  constructor(public ob:OnlineserviceService, public r:ActivatedRoute ){
    this.prod = ob.prod;
    r.queryParamMap.subscribe(result=>{
      this.data = result.get('s');
    });
    
    this.prod = this.prod.filter(c=>c.pname.includes(this.data))
  }


}
