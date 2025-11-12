// logintwo-component.ts
// ----------------------
// Handles login logic for the LoginTwo component.
// Uses Reactive Forms for data binding and HttpClient for API communication.
// On success, stores a token in localStorage and redirects to '/dashboard'.

import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logintwo-component',
  imports: [ReactiveFormsModule],
  templateUrl: './logintwo-component.html',
  styleUrl: './logintwo-component.css',
})
export class LogintwoComponent {

  // Reactive form setup for login fields (EmailId and Password)
  loginForm: FormGroup = new FormGroup({
    EmailId: new FormControl(''),
    Password: new FormControl('')
  });

  // Dependency injection for HTTP requests and routing
  http = inject(HttpClient);
  router = inject(Router);

  // Triggered when user clicks the Login button
  onLogin() {
    debugger;
    const formValue = this.loginForm.value;

    // API call to external login endpoint
    this.http.post("https://freeapi.miniprojectideas.com/api/User/Login", formValue).subscribe({
      next: (response: any) => {
        debugger;

        // If login succeeds
        if (response.result) {
          alert("Login Successful");

          // Save user token in local storage for future requests
          localStorage.setItem("angular20User", response.data.token);

          // Navigate to dashboard route after login
          this.router.navigateByUrl("/dashboard");
        } else {
          // Show error message from API
          alert(response.message);
        }
      },
      error: (error) => {
        debugger;
        // Handle HTTP or network error
        alert(error.statusText);
      }
    });
  }
}

/*
  Relation:
  - The [formGroup]="loginForm" in HTML connects to this component's FormGroup.
  - The onLogin() function is triggered by the (click) event in HTML.
  - Navigation uses Angular Router to go to '/dashboard'.
  - Token is later used by token-interceptor.ts to attach auth headers to all API calls.
*/
