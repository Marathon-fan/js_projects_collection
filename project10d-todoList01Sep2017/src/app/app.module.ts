import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemFormComponent } from './items/item-form/item-form.component';
import { ItemService } from './items/shared/item.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemDetailComponent,
    ItemsListComponent,
    ItemFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
