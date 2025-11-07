import { DatePipe, JsonPipe, LowerCasePipe, NgClass, NgStyle, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass, NgStyle, UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, JsonPipe, DatePipe],
  templateUrl: './att-directives-component.html',
  styleUrl: './att-directives-component.css',
})
export class AttDirective implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  divClassName = signal<string>("");

  firstName: string = "Cheatan";

  courseName: string = "Angular 20 tutorial examples";

  rollNoList = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  isDiv2Green: boolean = false;

  currentDate: Date = new Date();

  studentObj: any = {
    name: "Cheatan",
    city: "Pune",
   state: "Maharashtra",
  }

  constructor() {
   console.log("constructor");
  }

  ngOnInit(): void {
      console.log("ngOnInit");
      // triggers api call
      // subscribe to the response
  }

  ngAfterContentInit(): void {  
      console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
      console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
      console.log("ngAfterViewInit");
      // to deal with viewChild
      // subscribe sometimes but ngonint is more widely used
  }

  ngAfterViewChecked(): void {
      console.log("ngAfterViewChecked");
  }

 ngOnDestroy(): void {
    console.log("ngOnDestroy");
    // unsubscribe
    // restrict use from navigating
 }

  setBgClass(className: string) {
    this.divClassName.set(className)
  }
  toggleDiv2Color() {
    this.isDiv2Green = !this.isDiv2Green;
  }

}