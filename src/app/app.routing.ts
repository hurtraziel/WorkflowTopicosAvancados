import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { TrabalhoComponent } from './trabalhos/trabalho/trabalho.component';
import { AdicionarTrabalhoComponent } from './trabalhos/adicionar-trabalho/adicionar-trabalho.component';
import { TrabalhosComponent } from './trabalhos/trabalhos.component';
import { TrabalhosAtrasadosComponent } from './trabalhos/trabalhos-atrasados.component';
import { TrabalhosAbertosComponent } from './trabalhos/trabalhos-abertos.component';
import { TrabalhosConcluidosComponent } from './trabalhos/trabalhos-concluidos.component';
import { AdicionarTarefaComponent } from './tarefas/adicionar-tarefa/adicionar-tarefa.component';
import { EditarTrabalhoComponent } from './trabalhos/editar-trabalho/editar-trabalho.component';


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
    {
        path: 'trabalhos-atrasados', component: TrabalhosAtrasadosComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'trabalhos-abertos', component: TrabalhosAbertosComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'trabalhos-concluidos', component: TrabalhosConcluidosComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'tarefa/:id', component: AdicionarTarefaComponent, 
        canActivate: [AuthGuard]
    },
    {
        path: 'editar-trabalho/:id', component: EditarTrabalhoComponent, 
        canActivate: [AuthGuard]
    },
]


export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);