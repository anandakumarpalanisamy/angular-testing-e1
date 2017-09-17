import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';

describe('TodosComponent', () => {

    let component: TodosComponent;
    let fixture: ComponentFixture<TodosComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TodosComponent
            ],
            providers: [
                TodoService
            ],
            imports: [
                HttpModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodosComponent);
        component = fixture.componentInstance;

    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should load todos from the server', () => {
        // const service = TestBed.get(TodoService);
        const service = fixture.debugElement.injector.get(TodoService);
        spyOn(service, 'getTodos').and.returnValue(Observable.from([ [1, 2, 3]]));
        fixture.detectChanges();
        expect(component.todos.length).toBe(3);
    });

});
