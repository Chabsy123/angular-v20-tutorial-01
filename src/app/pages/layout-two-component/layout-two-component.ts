import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-two-component',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './layout-two-component.html',
  styleUrl: './layout-two-component.css',
})
export class LayoutTwoComponent {


  router = inject(Router);

  onLogOff(){
    this.router.navigate(["/login-two"])
  }
}
