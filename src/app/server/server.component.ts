import { Component } from '@angular/core';

@Component ({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    private serverId:number = 1;
    private serverStatus:string = 'offline';
    private addNewServer:boolean = false;
    private createServerMsg:string = "Server is not yet created. Click to create one..";
    private serverName:string='';

   constructor() {  
        //same as function () {} 
        setTimeout(() => {
        this.addNewServer=true
        },2000);
   }

   getServerStatus() {
        return this.serverStatus;
   }
   onCreateServer() {
        this.createServerMsg = "Server is now created and the name is "+this.serverName;
  }
}