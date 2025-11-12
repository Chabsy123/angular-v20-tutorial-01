// Importing HttpClient for making HTTP requests (GET, POST, PUT, DELETE, etc.)
import { HttpClient } from '@angular/common/http';

// Importing Component decorator and lifecycle hook (OnInit) from Angular core
import { Component, inject, OnInit } from '@angular/core';

// Defining the component using the @Component decorator
@Component({
  // HTML tag name used to render this component in templates
  selector: 'app-getapi-component',

  // No standalone imports are required here since only HttpClient is used (injected directly)
  imports: [],

  // Path to the HTML and CSS files for this component
  templateUrl: './getapi-component.html',
  styleUrl: './getapi-component.css',
})
export class GetapiComponent implements OnInit {

  // Injecting HttpClient using Angular's new `inject()` function (replaces constructor injection)
  http = inject(HttpClient);

  // Arrays to store data fetched from APIs
  userList: any[] = [];      // Stores list of users from JSONPlaceholder API
  todoList: any[] = [];      // Stores list of todo items from JSONPlaceholder API
  busUserList: any[] = [];   // Stores list of bus booking users from FreeProjectAPI

  // ngOnInit lifecycle hook runs automatically when the component is initialized
  ngOnInit(): void {
    debugger; // Used for debugging (you can remove it in production)
    this.getUser();               // Fetch all users
    this.getTodoItems();          // Fetch todo items
    this.getAllBusBookingUsers(); // Fetch bus booking users
  }

  // Fetches user data from JSONPlaceholder API
  getUser() {
    debugger;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result: any) => {
      this.userList = result; // Assigns the API response to userList array
    });
  }

  // Fetches todo list data from JSONPlaceholder API
  getTodoItems() {
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe((response: any) => {
      this.todoList = response; // Assigns the API response to todoList array
    });
  }

  // Fetches bus booking user data from FreeProjectAPI
  getAllBusBookingUsers() {
    this.http.get("https://api.freeprojectapi.com/api/BusBooking/GetAllUsers").subscribe((res: any) => {
      // The API response is wrapped in a 'data' object, so we extract it
      this.busUserList = res.data;
    });
  }

}
