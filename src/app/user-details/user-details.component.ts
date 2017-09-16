import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: [ './user-details.component.css' ]
})
export class UserDetailsComponent implements OnInit {

    constructor(private router: Router, private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe(param => {
            if (param['id'] === 0) {
                this.router.navigate(['not-found']);
            }
        });
    }

    save() {
        this.router.navigate(['users']);
    }
}
