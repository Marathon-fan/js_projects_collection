import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../shared/item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})

export class ItemDetailComponent implements OnInit {

  @Input()
  item: Item = null;

  @Output()
  itemDeleteEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteThisItem() {
    this.itemDeleteEvent.emit(this.item);
  }

}
