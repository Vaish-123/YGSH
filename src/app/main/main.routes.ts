import { Routes } from '@angular/router';

export const mainRoutes: Routes = [
    {
        path: 'userList',
        loadComponent: () => import('./components/user/user-list/user-list.component').then(m => m.UserListComponent)
    },
    {
        path: 'userDetails',
        loadComponent: () => import('./components/user/user-details/user-details.component').then(m => m.UserDetailsComponent)
    }
];
