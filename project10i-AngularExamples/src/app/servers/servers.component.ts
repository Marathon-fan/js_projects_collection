import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-servers',
  //template: '<app-server></app-server><app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styles: [`
   h3 {
    color: greenyellow;
    }
  `]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreated = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;

    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Server name is ' + this.serverName;
  }

  onUpdateServerName(event : Event){
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;

  }

}
