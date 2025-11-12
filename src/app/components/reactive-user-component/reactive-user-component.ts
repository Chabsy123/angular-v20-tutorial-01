import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-user-component',
  imports: [ReactiveFormsModule], // Needed for reactive forms
  templateUrl: './reactive-user-component.html',
  styleUrl: './reactive-user-component.css',
})
export class ReactiveUserComponent implements OnInit {

  // Array to store users fetched from API
  userList: any[] = [];

  // HttpClient for API calls
  http = inject(HttpClient);

  // =========================
  // Reactive Form Definition
  // =========================
  userForm: FormGroup = new FormGroup({
    userId: new FormControl(0), // default 0 for new users
    emailId: new FormControl('', [
      Validators.required,    // email is required
      Validators.minLength(5), // min 5 chars
      // You can also add Validators.email if needed
    ]),
    password: new FormControl('', Validators.required), // password required
    fullName: new FormControl(''), // optional
    mobileNo: new FormControl(''), // optional
  });

  ngOnInit(): void {
    // Load existing users on component initialization
    this.getUsers();
  }

  // =========================
  // API METHODS
  // =========================

  getUsers() {
    // GET request to fetch all users
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((res: any) => {
      this.userList = res; // store response in userList
    });
  }

  // =========================
  // FORM SUBMISSION
  // =========================
  onSaveUser() {
    debugger;
    const formValue = this.userForm.value; // get reactive form values

    // POST request to save new user
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register", formValue).subscribe({
      next: () => {
        alert("User Registered Successfully");
        this.getUsers(); // refresh user list after save
      },
      error: (error) => {
        alert("Error Occurred: " + error);
      }
    });
  }

}
