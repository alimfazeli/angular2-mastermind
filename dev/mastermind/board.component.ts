import {Component, Input, HostListener} from 'angular2/core';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'game-board',
    templateUrl: '/templates/mastermind/board.html',
    inputs: ['name:username'],
})

export class BoardComponent implements OnInit {

    private possibleColors = ['green', 'blue', 'yellow', 'red', 'purple', 'orange'];

    private displayColors = {
        green: '#66ff99',
        blue: '#0066cc',
        red: '#ff3333',
        purple: '#a3297a',
        yellow: '#ffff00',
        orange: '#ff8c1a',
    }

    attempts: any[] =[];
    
    answer: string[] = ["0","0","0","0"];

    correctAnswer:string[] = [];

    name:string;

    ngOnInit() {

        for(let i=0; i<4; i++) {
            this.correctAnswer.push(this.possibleColors[Math.floor(Math.random() * this.possibleColors.length)]);
        }

        console.log(this.correctAnswer);
    }

    submitAnswer() {
        this.attempts.push(this.answer);

        this.clearAnswer();
    }

    private clearAnswer() {
        this.answer = ["0","0","0","0"];
    }
}
