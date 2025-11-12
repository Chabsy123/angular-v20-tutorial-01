import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MasterService } from '../../services/master-service';

@Component({
  selector: 'app-login-component',
  imports: [FormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  // Login object with username and password bound to form
  loginObj: any = {
    userName: "",
    password: ""
  };

  // Inject router for navigation and master service for communication
  router = inject(Router);
  masterService = inject(MasterService);

  // Login button handler
  onLogin() {
    debugger;
    // Simple static check — can be replaced with backend validation
    if (this.loginObj.userName == 'Admin' && this.loginObj.password == '112233') {
      // Save to localStorage
      localStorage.setItem("angular20User", 'Admin');
      // Notify other components via MasterService
      this.masterService.onLogin.next(true);
      // Navigate to admin page
      this.router.navigateByUrl("/admin");
    } else {
      alert("Invalid Credentials");
    }
  }
}

/*
Relation:
- Triggers login event broadcasted via MasterService.
- LayoutComponent listens for the login event and updates navbar UI.
- app.routes.ts redirects to LayoutComponent (main app shell) after login.
*/
