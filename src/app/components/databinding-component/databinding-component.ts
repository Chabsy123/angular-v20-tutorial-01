import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding-component',
  imports: [FormsModule],
  templateUrl: './databinding-component.html',
  styleUrl: './databinding-component.css',
})
export class DatabindingComponent {
  courseName: string = "Videography";

  productPrice: number = 100;

  max_length: number = 8;

  min_char: number = 5;

  inputType: string = "radio";

  myClassName: string = "myColor";

  // constructor() {
  //   this.courseName = "Photography";
    // because coursename is a string this.courseName can only be  a string not any other type
  // }

  showWelcomeMessage() {
    alert("Welcome to Angular Tutorial");
  }

  changeCourseName() {
    this.courseName = "Photography";
  }

  onCityChange(){
    alert("City changed");
  }
}
