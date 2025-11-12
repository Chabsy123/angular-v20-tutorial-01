// Importing Angular built-in directives and pipes for use in template
import { DatePipe, JsonPipe, LowerCasePipe, NgClass, NgStyle, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

// Importing Angular core features and lifecycle hooks
import { 
  AfterContentChecked, 
  AfterContentInit, 
  AfterViewChecked, 
  AfterViewInit, 
  Component, 
  OnDestroy, 
  OnInit, 
  signal 
} from '@angular/core';

// Component metadata
@Component({
  selector: 'app-att-directive', // HTML tag for this component
  imports: [
    NgClass, // For dynamic class binding
    NgStyle, // For dynamic style binding
    UpperCasePipe, LowerCasePipe, TitleCasePipe, // Text transformation pipes
    SlicePipe, JsonPipe, DatePipe // Array/object/date formatting pipes
  ],
  templateUrl: './att-directives-component.html',
  styleUrl: './att-directives-component.css',
})
export class AttDirective implements 
  OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  // Using Angular signals to create reactive variables
  divClassName = signal<string>(""); // Holds the current CSS class for a div

  // Sample properties for demonstration with pipes and bindings
  firstName: string = "Cheatan"; // For uppercase pipe
  courseName: string = "Angular 20 tutorial examples"; // For lowercase/titlecase pipe
  rollNoList = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]; // For slice pipe
  isDiv2Green: boolean = false; // For ngStyle background color toggle
  currentDate: Date = new Date(); // For date pipe
  studentObj: any = { // For JSON pipe
    name: "Cheatan",
    city: "Pune",
    state: "Maharashtra",
  };

  constructor() {
    // Runs when the component is instantiated
    console.log("constructor");
  }


  // Lifecycle Hooks
 
  
  ngOnInit(): void {
    console.log("ngOnInit");
    // Ideal place for API calls and initialization logic
  }

  ngAfterContentInit(): void {  
    console.log("ngAfterContentInit");
    // Runs after Angular projects external content into the component
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
    // Called after Angular checks content projected into the component
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
    // Runs after component's view and child views are initialized
    // Good place to work with @ViewChild references
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
    // Called after the component's view has been checked by the change detection
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
    // Runs just before Angular destroys the component
    // Good place to unsubscribe from observables or detach event handlers
  }

 
  // Methods used in template
  

  // Sets a new CSS class for the div (used with [ngClass])
  setBgClass(className: string) {
    this.divClassName.set(className);
  }

  // Toggles the boolean variable isDiv2Green to change background color dynamically
  toggleDiv2Color() {
    this.isDiv2Green = !this.isDiv2Green;
  }

}
