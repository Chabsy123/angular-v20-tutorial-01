import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-user-component',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-user-component.html',
  styleUrl: './reactive-user-component.css',
})
export class ReactiveUserComponent implements OnInit {

  userList: any[] = [];
  http = inject(HttpClient);
// the template of the reactive form from the api that you are using(in your form these are the controls)
  userForm: FormGroup = new FormGroup({
    userId: new FormControl(0),
    emailId: new FormControl('', [Validators.required,Validators.minLength(5),]), //
    password: new FormControl('', Validators.required),
    fullName: new FormControl(''),
    mobileNo: new FormControl('')
  });

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((res: any) => {
      this.userList = res;
    });
  }

  onSaveUser() {
    debugger;
    // this will you give you the object that you have created in the form
    const formValue = this.userForm.value;
    // then you can pass it to the api as a parameter
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register", this.userForm.value).subscribe({
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
