// Import necessary Angular core and router modules
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-two-component',   // HTML tag to use this component
  imports: [RouterLink, RouterOutlet],     // Enables router links and child routes
  templateUrl: './layout-two-component.html',  // HTML template file
  styleUrl: './layout-two-component.css',      // Optional CSS file
})
export class LayoutTwoComponent {

  // Inject Angular's Router service to navigate between pages
  router = inject(Router);

  /**
   * Logs the user out by redirecting them back to the login page.
   * You could also clear the token here if you want to invalidate the session.
   */
  onLogOff() {
    // Optional: Clear authentication token before redirect
    // localStorage.removeItem("angular20User");

    // Redirects the user to the login page route
    this.router.navigate(["/login-two"]);
  }
}
