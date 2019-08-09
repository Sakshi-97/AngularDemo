import { Component, OnInit, Input, OnChanges, DoCheck, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements DoCheck {
  @Input() user: any;
  @Output() sendClick: EventEmitter<String> = new EventEmitter<String>();

  constructor() { }

  ngDoCheck() {
    console.log(this.user)
  }

  sendData(email) {
    console.log("sending email", email)
    this.sendClick.emit(email);
  }

}
