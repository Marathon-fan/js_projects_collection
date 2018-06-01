import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem as TodoItemModel } from './../store/todoStore';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {

  @Input()
  item: TodoItemModel;

  @Output()
  done = new EventEmitter();

  doneClicked() {
    this.done.next(this.item);
  }

  constructor() { }

  ngOnInit() {
  }

}
