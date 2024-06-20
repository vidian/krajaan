import { Routes } from '@angular/router';
import { DashboardHomepageComponent } from './dashboard/dashboard-homepage/dashboard-homepage.component';

export const routes: Routes = [
    {path: '', component:DashboardHomepageComponent, pathMatch:'full'},
    {path: '**',  redirectTo:'', pathMatch:'full'},
];
