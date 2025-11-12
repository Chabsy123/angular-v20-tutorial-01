import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow-component',
  imports: [FormsModule], // Required for [(ngModel)] two-way binding
  templateUrl: './control-flow-component.html',
  styleUrl: './control-flow-component.css',
})
export class ControlFlowComponent {
  
  // Boolean to show/hide paragraph
  isParaVisible = false;

  // Input value bound to month name
  startMonthName: string = "feb";

  // Array of city names for lists and dropdowns
  citiList: string[] = ["Pune", "Mumbia", "Panji", "Nagpur"];

  // Array of students for table example
  studentList: any[] = [
    { name: 'AAAA', city: 'Pune', isActive: false },
    { name: 'BB', city: 'Mumbia', isActive: false },
    { name: 'CCC', city: 'Pune', isActive: true },
    { name: 'DDD', city: 'Nagpur', isActive: false },
  ];


  // Methods for buttons
  // Show paragraph
  showP() {
    this.isParaVisible = true;
  }

  // Hide paragraph
  hideP() {
    this.isParaVisible = false;
  }

}
