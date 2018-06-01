import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-user-name',
  templateUrl: './add-user-name.component.html',
  styleUrls: ['./add-user-name.component.css']
})
export class AddUserNameComponent implements OnInit {

  userName = ''

  constructor() { }

  ngOnInit() {
  }

}
