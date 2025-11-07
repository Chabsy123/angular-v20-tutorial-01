import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow-component',
  imports: [FormsModule],
  templateUrl: './control-flow-component.html',
  styleUrl: './control-flow-component.css',
})
export class ControlFlowComponent {
    isParaVisible = false;

  startMonthName : string = "feb";

  citiList : string[] = ["Pune", "Mumbia", "Panji", "Nagpur"];

  studentList : any[] = [
    {name: 'AAAA', city:'Pune', isActive:false},
    {name: 'BB', city:'Mumbia', isActive:false},
    {name: 'CCC', city:'Pune', isActive:true},
    {name: 'DDD', city:'Nagpur', isActive:false},
  ]

  showP() {
    this.isParaVisible = true;
  }

  hideP() {
    this.isParaVisible = false;
  }

}
