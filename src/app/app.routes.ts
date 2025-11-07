import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin-component/admin-component';
import { ControlFlowComponent } from './components/control-flow-component/control-flow-component';
import { DatabindingComponent } from './components/databinding-component/databinding-component';
import { SignalComponent } from './components/signal-component/signal-component';
import { AttDirective } from './components/att-directives-component/att-directives-component';
import { GetapiComponent } from './components/getapi-component/getapi-component';

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
  {
    path: 'att-directives',
    component: AttDirective
   },
   {
    path: 'get-api',
    component: GetapiComponent
    },
];
// handles navigation or to achieve page based navigation
