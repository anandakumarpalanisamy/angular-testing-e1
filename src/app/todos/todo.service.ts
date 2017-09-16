import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {
    constructor(private http: Http) {
    }

    add(todo) {
        return this.http
            .post('...', todo)
            .map(response => response.json());
    }

    getTodos() {
        return this.http
            .get('...')
            .map(response => response.json());
    }

    getTodosPromise() {
        return this.http
        .get('...')
        .map(response => response.json()).toPromise();
    }

    delete(id) {
        return this.http
            .delete('...')
            .map(response => response.json());
    }
}
