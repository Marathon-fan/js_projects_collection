// import {EventAggregator} from aurelia-event-aggregator;
import {WebAPI} from './web-api';  //npm install npm-web-api
import {inject} from 'aurelia-framework';


@inject(WebAPI)
    export class ContactList {
      constructor(api) {
        this.api = api;
        this.contacts = [];
      }

    //ea.subscribe(ContactViewed, msg => this.select(msg.contact));

    created() {
        this.api.getContactList().then(contacts => this.contacts = contacts);

    }

    select(contact) {
        this.selectedId = contact.id;
        return true;
    }
}




