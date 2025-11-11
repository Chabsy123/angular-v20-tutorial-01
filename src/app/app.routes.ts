import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin-component/admin-component';
import { ControlFlowComponent } from './components/control-flow-component/control-flow-component';
import { DatabindingComponent } from './components/databinding-component/databinding-component';
import { SignalComponent } from './components/signal-component/signal-component';
import { AttDirective } from './components/att-directives-component/att-directives-component';
import { GetapiComponent } from './components/getapi-component/getapi-component';
import { UserComponent } from './user-component/user-component';
import { ReactiveUserComponent } from './components/reactive-user-component/reactive-user-component';
import { PipeComponent } from './components/pipe-component/pipe-component';
// import { UserComponent } from './components/user-component/user-component';

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
   {
    path: 'user',
    component: UserComponent
   },
   {
    path: 'reactive-user',
    component: ReactiveUserComponent
   },
   {
    path: 'pipe',
    component: PipeComponent
   }
];
// handles navigation or to achieve page based navigation
