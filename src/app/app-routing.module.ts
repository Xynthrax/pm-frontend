import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from './shared/auth.guard';
import DefaultComponent from './demo/default/default.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'home',
    component: AdminComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/default',
        pathMatch: 'full'
      },
      {
        path: 'default',
        loadComponent: () => import('./demo/default/default.component')
      },
      {
        path: 'appointment',
        loadComponent: () => import('./demo/sample-page/sample-page.component')
      }
    ]
  }
];
// const routes: Routes = [
//   {
//     path: '',
//     component: GuestComponent,
//     children: [
//       {
//         path: '',
//         redirectTo: '/login',
//         pathMatch: 'full'
//       },
//       {
//         path: 'login',
//         loadChildren: () => import('./demo/pages/authentication/authentication.module').then((m) => m.AuthenticationModule)
//       }
//     ]
//   },
//   {
//     path: 'patient',
//     component: AdminComponent,
//     children: [
//       {
//         path: '',
//         redirectTo: '/default',
//         pathMatch: 'full'
//       },
//       {
//         path: 'default',
//         loadComponent: () => import('./demo/default/default.component')
//       },
//       {
//         path: 'typography',
//         loadComponent: () => import('./demo/elements/typography/typography.component')
//       },
//       {
//         path: 'color',
//         loadComponent: () => import('./demo/elements/element-color/element-color.component')
//       },
//       {
//         path: 'sample-page',
//         loadComponent: () => import('./demo/sample-page/sample-page.component')
//       }
//     ]
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
