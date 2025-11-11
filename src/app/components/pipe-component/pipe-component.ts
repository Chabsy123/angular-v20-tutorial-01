import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipePipe } from '../../pipes/na-pipe-pipe';


@Component({
  selector: 'app-pipe-ex',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, SlicePipe,
    JsonPipe, NaPipePipe
  ],
  templateUrl: './pipe-component.html',
  styleUrl: './pipe-component.css',
})
export class PipeComponent {
  courseName = "Angular";

  courseDuration = "DURATION IS 3 mONTH";

  courseDate: Date = new Date();

  rollNoList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  studentObj: any = {
    name: "John Doe",
    mobile: "9876543210",
    address: {
      city: "Bangalore",
      state: "",
    }

  }

}
