import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  appName: string = "Angular";

  // Subject is used to broadcast login events across components
  onLogin: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  // Example method for arithmetic
  getSum(num1: number, num2: number) {
    const result = num1 + num2;
    return result;
  }

  // Example API call using HttpClient
  getUsers() {
    return this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers");
  }
}

/*
Relation:
- Shared service used across components (singleton).
- Emits login status to LayoutComponent and App.ts.
- Handles reusable logic (API calls, utilities, etc.).
*/
