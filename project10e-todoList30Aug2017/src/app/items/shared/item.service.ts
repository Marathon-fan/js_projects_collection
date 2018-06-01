import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable()
export class ItemService {

  items: Item[] = [];

  constructor() { }

  getItems(): Item[] {
    return this.items;
  }

  addItem(curItem: Item): void {
    this.items.push(curItem);
    console.log(this.items.toString());
  }

  deleteItem(curItem: Item): void {
     const index = this.items.indexOf(curItem);
     this.items.splice(index, 1);
  }

  deleteAll(): void {
    this.items.splice(0, this.items.length);
  }

}
