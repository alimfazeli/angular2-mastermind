import {Component, OnInit} from "angular2/core";

@Component({
    selector: 'navigation',
    templateUrl: 'templates/mastermind/nav.html'
})

export class NavigationComponent implements OnInit{
    user:string;

    ngOnInit() {
        this.user = "niki";
    }
}
