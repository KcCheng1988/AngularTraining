import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverCreated = false;

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is '
    + this.serverName;
    this.serverCreated = true;
  }

  onCreateServerWithEnter(event: any){
    this.serverName = event.target.value;
    this.onCreateServer();
  }

  onUpdateServerName(event: any ){
    /*console.log(event);*/
    this.serverName = (<HTMLInputElement>event.target).value;
  }


}
//selector by attribute:
// selector: '[app-servers]',

//selector by class:
// selector: '.app-servers',

//selector by component:
//selector: 'app-servers',
