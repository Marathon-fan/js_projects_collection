import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { ItemFormComponent } from './items/item-form/item-form.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { FormsModule } from '@angular/forms';
import { ItemService } from './items/shared/item.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemDetailComponent,
    ItemFormComponent,
    ItemsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
