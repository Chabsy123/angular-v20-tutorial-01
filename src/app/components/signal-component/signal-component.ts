import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-component',
  imports: [],
  templateUrl: './signal-component.html',
  styleUrl: './signal-component.css',
})
export class SignalComponent {

  // Simple property, not reactive
  firstName: string = "Cheatan";

  // Another simple property
  productName = "Moto";

  // Signal: reactive value that can change over time
  courseName = signal<string>('Angular');

  // Another signal
  courseDuration = signal("15 Videos");

  // Computed property: automatically updates if courseName or courseDuration changes
  courseDetails = computed(() => this.courseName() + " - " + this.courseDuration());

  // Example function demonstrating how to update signals
  construction() {
    // Updating normal property
    this.firstName = "Rahul";
    console.log(this.firstName);

    // Reading signal value
    console.log(this.courseName());

    // Updating signal after 5 seconds
    setTimeout(() => {
      this.courseName.set("React"); // automatically updates template wherever courseName() is used
    }, 5000);

    // Logging current value again
    console.log(this.courseName());
  }
}
