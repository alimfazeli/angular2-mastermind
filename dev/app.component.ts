import {Component} from 'angular2/core';
import {BoardComponent} from './mastermind/board.component';
import {SetupComponent} from './mastermind/setup.component';
import {NavigationComponent} from './mastermind/navigation.component';

@Component({
    selector: 'my-app',
    templateUrl: 'templates/main.html',
    directives: [BoardComponent,SetupComponent, NavigationComponent]
})

export class AppComponent {
    gameData = {
        name: 'Niki'
    }

    onUpdate(name) {
        this.gameData.name = name;
    }

    winHandler(barikalla) {
        alert(barikalla);
    }
}
