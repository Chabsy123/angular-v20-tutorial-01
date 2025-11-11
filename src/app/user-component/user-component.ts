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

  onReset() {
    this.userObj = {
      "userId": 0,
      "emailId": "",
      "password": "",
      "fullName": "",
      "mobileNo": ""
    }
  }
  // this.userObj.userId,this.userObj is put after the url to match the id with the record
  onUpdateUser() {
    // apparently you have to add a new property to the object in order for it to work but he said not to worry about it that he will fix it
    // this.userObj.createdDate = new Date();
    this.http.put("https://api.freeprojectapi.com/api/GoalTracker/updateUser" + this.userObj.userId, this.userObj).subscribe({
      next: () => {
        alert("User Updated Successfully");
        this.getUsers();
      },
      error: (error) => {
        alert("Error Occurred" + error);
      }
    })
  }

  onDeleteUser(id: number) {
    debugger;
    // always try to confirm deletion before deleting
    const isDeleted = confirm("Are you sure you want to delete this user?");
    if (isDeleted) {
      this.http.delete("https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id=" + id).subscribe({
        next: () => {
          alert("User Deleted Successfully!");
          this.getUsers();
        },
        error: (error) => {
          alert("Error Occurred" + error);
        }
      })
    }

  }

  onEdit(item: any) {
    this.userObj = item;
  }

  // when deleting just pass the user id for what you want to delete

}
