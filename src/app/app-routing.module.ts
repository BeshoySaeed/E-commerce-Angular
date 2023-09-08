import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './lay-out/layout/layout.component';
import { ProjectsComponent } from './products/projects/projects.component';
import { ProjectDataComponent } from './products/project-data/project-data.component';
import { ProjectCartComponent } from './products/project-cart/project-cart.component';
import { LogInComponent } from './login-out/log-in/log-in.component';
import { RegisterComponent } from './login-out/register/register.component';
import { AuthGuard } from './cardGuard/cart.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'projects', pathMatch: 'full' },
      { path: 'projects', component: ProjectsComponent },
    ],
  },
  {
    path: 'cart',
    component: ProjectCartComponent,
    canActivate: [AuthGuard],
  },
  { path: 'projects/:id', component: ProjectDataComponent },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
