import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-component',
  imports: [FormsModule],
  templateUrl: './user-component.html',
  styleUrl: './user-component.css',
})

export class UserComponent implements OnInit {
// post api is to create new record
  userList: any[] = [];
  userObj: any = {
    "userId": 0,
    "emailId": "",
    "password": "",
    "fullName": "",
    "mobileNo": ""
  }


  http = inject(HttpClient);

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((res: any) => {
      this.userList = res;
    });
  }
// old method of calling POST method
  // onSaveUser() {
  //   this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register", this.userObj).subscribe((Result: any) => {
  //    alert("User Registered Successfully");
  //    this.getUsers();
  // }, error => {

  // })}
// new method of calling POST method
  onSaveUser() {
    debugger;
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register", this.userObj).subscribe({
      next: () => {
        alert("User Registered Successfully");
        this.getUsers();
      },
      error: (error) => {
        alert("Error Occurred" + error);
      }
    }
    )
  }

}
