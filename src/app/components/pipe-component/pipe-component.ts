// Importing commonly used Angular built-in pipes
import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

// Importing Component decorator to define metadata for the component
import { Component } from '@angular/core';

// Importing the custom pipe (NaPipePipe) created in the project
import { NaPipePipe } from '../../pipes/na-pipe-pipe';

// Defining the PipeComponent using the @Component decorator
@Component({
  // Selector used in HTML to load this component
  selector: 'app-pipe-ex',

  // Importing all pipes that will be used inside this component's template
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    SlicePipe,
    JsonPipe,
    NaPipePipe
  ],

  // Linking to the external HTML and CSS files for this component
  templateUrl: './pipe-component.html',
  styleUrl: './pipe-component.css',
})
export class PipeComponent {

  // String property to demonstrate text transformation pipes
  courseName = "Angular";

  // String with mixed cases to demonstrate uppercase, lowercase, and titlecase pipes
  courseDuration = "DURATION IS 3 mONTH";

  // Date object to demonstrate various date format transformations
  courseDate: Date = new Date();

  // Array of numbers to demonstrate the SlicePipe (extracting a portion of an array)
  rollNoList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Object representing a student, used for JsonPipe and custom NaPipe demonstrations
  studentObj: any = {
    name: "John Doe",
    mobile: "9876543210",
    address: {
      city: "Bangalore",
      state: "", // Empty value to test the NaPipe (should display 'N/A')
    }
  };
}
