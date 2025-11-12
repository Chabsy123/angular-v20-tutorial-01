import { HttpClient } from '@angular/common/http';
import { Component, inject, resource } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-resource-api-component',
  imports: [],
  templateUrl: './resource-api-component.html',
  styleUrl: './resource-api-component.css',
})
export class ResourceApiComponent {
  
  http = inject(HttpClient);
  // Inject HttpClient for HTTP requests

  // -----------------------------
  // RESOURCE API (using Angular signals)
  // -----------------------------
  userData = resource({
    // Loader function: fetch data from API
    loader: () => {
      return fetch("https://jsonplaceholder.typicode.com/users")
        .then(result => result.json());
    }
  });
  // resource() automatically manages loading, value, and error states

  // -----------------------------
  // RXRESOURCE (Reactive with Observables)
  // -----------------------------
  userList = rxResource({
    stream: () => this.http.get<any[]>("https://jsonplaceholder.typicode.com/users")
    // rxResource converts Observable stream into a reactive resource
  });

  constructor() { 
    // Reload resource after 6 seconds (for demo)
    setTimeout(() => {
      this.userData.reload();
      // reload() triggers the loader again
    }, 6000);
  }
}
