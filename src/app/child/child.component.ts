import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit, OnChanges, DoCheck,OnDestroy {
  ngOnInit(): void {
    console.log('Write initializing code here');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  ngDoCheck(): void {
    console.log('On Do Check triggered..');
  }
  ngOnDestroy(): void {
    //write clean up logic code here
    console.log('Destroy method called');
  }

  @Input()
  childdata:string='';

  @Output()
  myevent:EventEmitter<string> = new EventEmitter<string>

  sendmessage()
  {
    // you need send message using events to child component
    this.myevent.emit("Message from Child...");
  }
}
