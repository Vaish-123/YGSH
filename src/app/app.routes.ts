import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';

export const routes: Routes = [
    {
        path: 'home',
        component: LayoutComponent,
        children: [
            {
                path: 'main',
                loadChildren: () => import('./main/main.routes').then(m => m.mainRoutes)
            },
        ],
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
];
