import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { homeComponent } from './home.component/home.component';
import { AboutComponent } from './about.component/about.component';
import { coursComponent } from './cours.component/cours.component';
import { singlecoursComponent } from './cours.component/single.cours/single.cours.componen';
const app_routes: Routes = [

    {
        path: '',
        component: homeComponent
    },
    {
        path: 'home ',
        component: homeComponent
    },
    {
        path: 'cours',
        component: coursComponent
    },
    {
        path: 'cours/:id',
        component: singlecoursComponent
    },
    {
        path: 'about',
        component: AboutComponent


    }
];
export const routers: ModuleWithProviders = RouterModule.forRoot(app_routes);