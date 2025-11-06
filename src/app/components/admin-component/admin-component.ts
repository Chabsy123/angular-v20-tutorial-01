import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-component',
  imports: [],
  templateUrl: './admin-component.html',
  styleUrl: './admin-component.css',
})
export class AdminComponent {
   firstName: string = "Chukwu";

   courseName: string = "Videography";

   rollNo: number = 123456;
}
