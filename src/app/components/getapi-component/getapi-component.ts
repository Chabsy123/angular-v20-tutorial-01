import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-getapi-component',
  imports: [],
  templateUrl: './getapi-component.html',
  styleUrl: './getapi-component.css',
})
export class GetapiComponent implements OnInit{

  http = inject(HttpClient);
  userList: any[] = [];
  todoList: any[] = [];
  busUserList: any[] = [];

  ngOnInit(): void{
    debugger;
    this.getUser();
    this.getTodoItems();
    this.getAllBusBookingUsers();
  }

  getUser() {
    debugger;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any) => {
      this.userList = result;
    })
  }

  getTodoItems(){
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe((response:any) => {
      this.todoList = response;
    })
  }

  getAllBusBookingUsers(){
    this.http.get("https://api.freeprojectapi.com/api/BusBooking/GetAllUsers").subscribe((res:any) =>{
      this.busUserList = res.data;
      // cause the data is inside the object hence the res.data
    })
  }

}
