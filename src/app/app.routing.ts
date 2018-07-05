import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { TrabalhoComponent } from './trabalho/trabalho.component';
import { AdicionarTrabalhoComponent } from './adicionar-trabalho/adicionar-trabalho.component';


export const APP_ROUTES: Routes = [
    {
        path: 'dashboard', component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'trabalho/:id', component: TrabalhoComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'novo-trabalho', component: AdicionarTrabalhoComponent,
        canActivate: [AuthGuard]
    },
]


export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);