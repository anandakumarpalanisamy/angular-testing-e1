import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: [ './todos.component.css' ]
})
export class TodosComponent implements OnInit {
    todos: any[] = [];
    message;

    constructor(private service: TodoService) { }

    ngOnInit() {
        this.service.getTodos().subscribe(todo => this.todos = todo);
    }

    add() {
        const newTodo = { title: '....'};
        this.service.add(newTodo).subscribe(
            todo => {
                this.todos.push(todo);
            },
            error => {
                this.message = error;
            }
        );
    }

    delete(id) {
        if (confirm('Are you sure?')) {
            this.service.delete(id).subscribe();
        }
    }
}
