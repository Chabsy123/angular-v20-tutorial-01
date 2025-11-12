import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MasterService } from '../../services/master-service';

@Component({
  selector: 'app-layout-component',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout-component.html',
  styleUrl: './layout-component.css',
})
export class LayoutComponent {
  loggedUserName: string = ""; // Holds the current logged user’s name
  router = inject(Router); // Used for navigation

  // Inject shared service to listen to login events
  constructor(private masterService: MasterService) {
    this.readLoggedData(); // Get data from localStorage if already logged in

    // Subscribe to login event from MasterService
    this.masterService.onLogin.subscribe(res => {
      this.readLoggedData(); // Refresh UI when login changes
    });
  }

  // Read user info from localStorage (persistent login)
  readLoggedData() {
    const loggedData = localStorage.getItem("angular20User");
    if (loggedData !== null) {
      this.loggedUserName = loggedData;
    }
  }

  // Logout function
  onLogOff() {
    localStorage.removeItem("angular20User");
    this.readLoggedData();
    this.loggedUserName = "";
    this.router.navigate(['login']); // Redirect back to login page
  }
}

/*
Relation:
- Connected to layout-component.html → controls navbar and logout behavior.
- Depends on MasterService (shared Subject) to detect login state changes.
- Triggered after successful login in LoginComponent.ts.
*/
