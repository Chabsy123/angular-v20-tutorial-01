import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../services/master-service';

@Component({
  selector: 'app-user-component',
  // Import FormsModule so [(ngModel)] and form directives work in template
  imports: [FormsModule],
  templateUrl: './user-component.html',
  styleUrl: './user-component.css',
})

export class UserComponent implements OnInit {

  // VARIABLES 

  // This array will store the list of all users fetched from the API
  userList: any[] = [];

  // This object is bound to the form inputs using [(ngModel)]
  // It represents a single user being created or edited
  userObj: any = {
    userId: 0,
    emailId: "",
    password: "",
    fullName: "",
    mobileNo: ""
  };

  // ==================== DEPENDENCY INJECTION ====================

  // Instead of using constructor injection, we’re using the `inject()` function
  // This creates instances of HttpClient and MasterService automatically
  http = inject(HttpClient);
  masterService = inject(MasterService);
  // or use constructor injection
  // constructor(private http: HttpClient, private masterService: MasterService) { }

  // ==================== LIFECYCLE HOOK ====================

  // Runs automatically when component loads
  ngOnInit(): void {
    // Get all existing users from the server
    this.getUsers();

    // Example: testing a method from MasterService (not required for form)
    debugger;
    const result = this.masterService.getSum(10, 20);
    const appData = this.masterService.appName;
  }

  // ==================== API CALLS ====================

  //  GET ALL USERS
  getUsers() {
    // Uses MasterService to call an API endpoint that returns all users
    // can only subscribe to an observable
    debugger;
    this.masterService.getUsers().subscribe((res: any) => {
      // The response (list of users) is stored in userList array
      this.userList = res;
    });
  }

  // CREATE (REGISTER) A NEW USER
  onSaveUser() {
    debugger;
    // Sends userObj to backend using POST
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register", this.userObj)
      .subscribe({
        next: () => {
          // When request succeeds, show success message
          alert("User Registered Successfully");
          // Refresh user list to include the new user
          this.getUsers();
        },
        error: (error) => {
          // Handle errors if something goes wrong
          alert("Error Occurred: " + error);
        }
      });
  }

  // RESET FORM
  onReset() {
    // Resets form fields to their default empty state
    this.userObj = {
      userId: 0,
      emailId: "",
      password: "",
      fullName: "",
      mobileNo: ""
    };
  }

  // UPDATE EXISTING USER
  onUpdateUser() {
    // NOTE: the userId is appended to the URL to update the correct record
    this.http.put(
      "https://api.freeprojectapi.com/api/GoalTracker/updateUser" + this.userObj.userId,
      this.userObj
    ).subscribe({
      next: () => {
        alert("User Updated Successfully");
        // Refresh user list to show the updated record
        this.getUsers();
      },
      error: (error) => {
        alert("Error Occurred: " + error);
      }
    });
  }

  // DELETE USER BY ID
  onDeleteUser(id: number) {
    debugger;
    // Always confirm before deleting
    const isDeleted = confirm("Are you sure you want to delete this user?");
    if (isDeleted) {
      // The "id" is passed as a query parameter in the API URL
      this.http.delete("https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id=" + id)
        .subscribe({
          next: () => {
            alert("User Deleted Successfully!");
            // Refresh the user list after deletion
            this.getUsers();
          },
          error: (error) => {
            alert("Error Occurred: " + error);
          }
        });
    }
  }

  //  EDIT USER (LOAD USER DATA INTO FORM)
  onEdit(item: any) {
    // Copies the selected user's data into the form
    // This automatically fills input fields because of [(ngModel)]
    this.userObj = item;
  }

}
