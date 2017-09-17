import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';
import { VoterComponent } from './voter/voter.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'users/:id',
        component: UserDetailsComponent
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'todos',
        component: TodosComponent
    },
    {
        path: '',
        component: HomeComponent
    }
];
