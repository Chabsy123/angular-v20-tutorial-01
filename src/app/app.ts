import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, } from '@angular/router';
import { UserComponent } from "./components/user-component/user-component";
import { AdminComponent } from './components/admin-component/admin-component';
import { DatabindingComponent } from './components/databinding-component/databinding-component';
import { SignalComponent } from './components/signal-component/signal-component';
import { ControlFlowComponent } from './components/control-flow-component/control-flow-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent, AdminComponent, DatabindingComponent, SignalComponent,ControlFlowComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-v20-tutorial-01');
}
