import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin-component/admin-component';
import { ControlFlowComponent } from './components/control-flow-component/control-flow-component';
import { DatabindingComponent } from './components/databinding-component/databinding-component';
import { SignalComponent } from './components/signal-component/signal-component';

export const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'control-flow-statement',
    component: ControlFlowComponent
  },

  {
    path: 'databinding',
    component: DatabindingComponent
  },

  {
    path: 'signal',
    component: SignalComponent
   },
];
// handles navigation or to achieve page based navigation
