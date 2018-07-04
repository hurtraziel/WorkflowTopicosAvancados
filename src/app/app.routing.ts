import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';


export const APP_ROUTES: Routes = [
    {
        path: '', component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login', component: LoginComponent
    },
]


export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);