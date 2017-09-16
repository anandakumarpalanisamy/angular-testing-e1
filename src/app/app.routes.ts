import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: '',
        component: HomeComponent
    }
];
