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
import { ResourceApiComponent } from './components/resource-api-component/resource-api-component';
import { LayoutComponent } from './components/layout-component/layout-component';
import { LoginComponent } from './components/login-component/login-component';
import { LogintwoComponent } from './pages/logintwo-component/logintwo-component';
import { LayoutTwoComponent } from './pages/layout-two-component/layout-two-component';
import { DashboardComponent } from './pages/dashboard-component/dashboard-component';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full'
  // },

  {
    path: '',
    redirectTo: 'login-two',
    pathMatch: 'full'
  },
  {
    path: 'login-two',
    component: LogintwoComponent
  },
  {
    path: '',
    component: LayoutTwoComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      }
    ]
  }
];


// {
//   path: '',
//   component: LayoutComponent,
//   children: [
//     { path: 'admin', component: AdminComponent },
//     { path: 'control-flow-statement', component: ControlFlowComponent },
//     { path: 'databinding', component: DatabindingComponent },
//     { path: 'signal', component: SignalComponent },
//     { path: 'att-directives', component: AttDirective },
//     { path: 'get-api', component: GetapiComponent },
//     { path: 'user', component: UserComponent },
//     { path: 'reactive-user', component: ReactiveUserComponent },
//     { path: 'pipe', component: PipeComponent },
//     { path: 'resource-api', component: ResourceApiComponent }
//   ]
// }
// ];

/*
Relation:
- Connects LoginComponent (entry point) and LayoutComponent (post-login dashboard).
- Defines nested child routes under LayoutComponent.
- Controls page navigation for navbar links.
*/
