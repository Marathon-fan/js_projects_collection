import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TodoStore } from './../store/todoStore';
import  { TodoItem as TodoModelItem} from './../store/todoStore';
//import { bootstrap } from '@angular/platform-browser';




@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  encapsulation: ViewEncapsulation.Native
})


export class TodolistComponent implements OnInit {

  newItem = 'test';
  store: TodoStore;

  constructor(){
    this.store = new TodoStore();
  }

  addItem(): void {
    this.store.addItem(this.newItem);
    this.newItem = '';

  }

  removeItem(item: TodoModelItem){
    this.store.removeItem(item);
  }

  ngOnInit() {
  }

}
