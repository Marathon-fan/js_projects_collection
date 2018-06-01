import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item';
import { ItemService } from '../shared/item.service';
import { ItemDetailComponent } from "../item-detail/item-detail.component";

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  public items: Item[];

  constructor(private itmSvc: ItemService) { }

  ngOnInit() {
    this.items = this.itmSvc.getItems();
  }

  deleteAnItem(curItem: Item) {
    this.itmSvc.deleteItem(curItem);
  }

}
