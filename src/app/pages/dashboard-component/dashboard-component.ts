import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-dashboard-component',
  imports: [],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})
export class DashboardComponent {


  http = inject(HttpClient);

  constructor() {
    this.getUsers();
  }

  getUsers(){
    // debugger;
    this.http.get("https://freeapi.miniprojectideas.com/api/User/GetAll").subscribe({
      next:(response) => {
        debugger;
        console.log(response);
      },
      error:(error) => {
        // debugger;
        console.log(error);
      }
    })
  }
}
