# angular2_data_binding
Angular application demonstrating types of data binding

Databinding
=============
Communication between Component(business logic - typescript code) and and its template(what user sees)
It is also important for communication between parent and child components
Angular processes all databinding once per javascript event cycle from the root of the application component tree through all child components

String Interpolation 
	-{{value}} 
	-to output data in a template
	-string interpolation has to resolve to a string
	-a number also works as it can be easily converted to a string
	-a method which returns a string can also be called with string interpolation. eg: {{ getServerStatus() }}
  -a ternary expression can also be written inside curly braces which resolves to a string
  -{{'Server'}} is also valid
Property Binding 
	-[property] = "data" 
	-dynamically bind some property with data
	-to change property of html element,component,directive etc use property binding
	-innerText property of an element is the one existing between {{}} 
	  <p [innerText] = "addNewServer"></p> //gives the value of 'addNewServer' true or false	
	  <p> {{addNewServer}}</p> //this is same as above line of code
Event Binding 
	-(event) = "handler"
  -React to events
  -<input type="text" (input)="onCreateServer($event)">
		$event is the data emmitted with the event triggered
		"input" is the DOM event which gets fired whenever user types every key stroke
		
		onCreateServer(event: Event) {
			val = ((HTMLInputElement)event.target).value;
			console.log(val);
		}
Two way Binding 
	-[(ngModel)] = "property"
	-combination of property binding and event binding
	-To use ngModel, FormsModule has to be imported in AppModule

Example:
==========
component.html
---------------
<button class="btn btn-primary" [disabled]="!allowNewServer" (click)="addServer()">Add Server</button><br>
<input type="text"[(ngModel)]="serverName">
<p>{{onAddServer()}}</p>

component.ts
--------------
export class AppserverComponent implements OnInit {

  private serverName:string = '';
  private allowNewServer:boolean = false;
  private serverMsg = '';
  constructor() {
    setInterval(()=>{
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }
  addServer() {
    this.serverMsg = 'Your server has been added: '+this.serverName;
  }
  onAddServer() {
    return this.serverMsg;
  }
}
