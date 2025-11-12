import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, } from '@angular/router';
import { AdminComponent } from './components/admin-component/admin-component';
import { DatabindingComponent } from './components/databinding-component/databinding-component';
import { SignalComponent } from './components/signal-component/signal-component';
import { ControlFlowComponent } from './components/control-flow-component/control-flow-component';
import { GetapiComponent } from './components/getapi-component/getapi-component';
import { UserComponent } from './user-component/user-component';
import { ReactiveUserComponent } from './components/reactive-user-component/reactive-user-component';
import { PipeComponent } from './components/pipe-component/pipe-component';
import { ResourceApiComponent } from './components/resource-api-component/resource-api-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AdminComponent, DatabindingComponent, SignalComponent,ControlFlowComponent, RouterLink, RouterLinkActive, GetapiComponent,UserComponent, ReactiveUserComponent, PipeComponent, ResourceApiComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-v20-tutorial-01');
}
