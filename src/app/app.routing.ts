import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { TrabalhoComponent } from './trabalhos/trabalho/trabalho.component';
import { AdicionarTrabalhoComponent } from './trabalhos/adicionar-trabalho/adicionar-trabalho.component';
import { TrabalhosComponent } from './trabalhos/trabalhos.component';


export const APP_ROUTES: Routes = [
    {
        path: 'dashboard', component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '', component: LoginComponent
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
    {
        path: 'trabalhos', component: TrabalhosComponent,
        canActivate: [AuthGuard]
    },
]


export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);