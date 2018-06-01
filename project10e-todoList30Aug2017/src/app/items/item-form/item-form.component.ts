import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../shared/item';
import { ItemService } from '../shared/item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})

export class ItemFormComponent implements OnInit {

  curItem: Item = new Item();

  constructor(private itmSvc: ItemService) { }

  ngOnInit() {
  }

  onclick() {
    this.itmSvc.addItem(this.curItem);
    this.curItem = new Item();
  }

}
