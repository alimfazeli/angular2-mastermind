import {Component} from 'angular2/core';
import {BoardComponent} from './mastermind/board.component';
import {SetupComponent} from './mastermind/setup.component';

@Component({
    selector: 'my-app',
    templateUrl: 'templates/main.html',
    directives: [BoardComponent,SetupComponent]
})

export class AppComponent {
    gameData = {
        name: 'Ali'
    }

    onUpdate(name) {
        this.gameData.name = name;
    }
}
