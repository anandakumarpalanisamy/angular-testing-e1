import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import { Subject } from 'rxjs/Subject';
import { UserDetailsComponent } from './user-details.component';

class RouterStub {
    navigate(params) {
    }
}

class ActivatedRouteStub {
    private subject = new Subject();
    // params: Observable<any> = Observable.empty();
    push(value) {
        this.subject.next(value);
    }

    get params() {
        return this.subject.asObservable();
    }
}

describe('UserDetailsComponent', () => {

    let component: UserDetailsComponent;
    let fixture: ComponentFixture<UserDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                UserDetailsComponent
            ],
            providers: [
                {
                    provide: Router,
                    useClass: RouterStub
                },
                {
                    provide: ActivatedRoute,
                    useClass: ActivatedRouteStub
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should redirect the user to the users page after save button is clicked', () => {
        const router = TestBed.get(Router);
        const spy = spyOn(router, 'navigate').and.callThrough();
        component.save();
        expect(spy).toHaveBeenCalledWith(['users']);
    });

    it('should navigate the user to the not-found page when an invalid id is passed', () => {
        const router = TestBed.get(Router);
        const spy = spyOn(router, 'navigate').and.callThrough();
        const route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
        route.push({ id: 0 });
        expect(spy).toHaveBeenCalledWith(['not-found']);
    });
});
