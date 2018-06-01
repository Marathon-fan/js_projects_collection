import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-function',
  templateUrl: './toggle-function.component.html',
  styleUrls: ['./toggle-function.component.css']
})
export class ToggleFunctionComponent implements OnInit {

  listOfPara = [];
  newPara = 'a new Para: sanguine! Optimistic ';
  trueFlag = true;
  showSecret = true;

  constructor() { }

  ngOnInit() {

  }

  onClickToggle(){
    this.showSecret = !this.showSecret;
    this.listOfPara.push(this.listOfPara.length + 1);
  }

}
