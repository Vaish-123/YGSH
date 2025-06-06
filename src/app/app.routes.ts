import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { UserListComponent } from './main/components/user/user-list/user-list.component';

export const routes: Routes = [
    {
        path: 'home',
        component: LayoutComponent,
        children: [
            { path: 'users', component: UserListComponent },
        ],
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
];
