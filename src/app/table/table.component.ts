import { Component } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  users: any[]=[];

  objectify(response: any){
    this.users = response;
    console.log(this.users);
  }

  ngOnInit(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => this.objectify(json));
  }
  
}
