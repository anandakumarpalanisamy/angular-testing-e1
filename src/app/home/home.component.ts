import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home/home.component.html',
    styleUrls: [ './home/home.component.css' ]
})
export class HomeComponent implements OnInit {

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {

    }

    go() {
        this.router.navigate(['users', 1]);
    }
}
