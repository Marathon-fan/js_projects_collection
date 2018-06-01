import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable()
export class ItemService {

  public items: Item[] = [];

  constructor() { }

  getList(): Item[] {
    return this.items;
  }

  addItem(curItem: Item): void {
    this.items.push(curItem);
  }

  deleteItem(curItem: Item): void {
    const Index = this.items.indexOf(curItem);
    this.items.splice(Index, 1);
  }

}
