import {Component, Input, HostListener, EventEmitter, Output} from 'angular2/core';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'game-board',
    templateUrl: '/templates/mastermind/board.html',
    inputs: ['name:username'],
})

export class BoardComponent implements OnInit {

    private possibleColors = ['green', 'blue', 'yellow', 'red', 'purple', 'orange'];

    @Output() WinEvent = new EventEmitter();

    private displayColors = {
        green: '#66ff99',
        blue: '#0066cc',
        red: '#ff3333',
        purple: '#a3297a',
        yellow: '#ffff00',
        orange: '#ff8c1a',
    }



    attempts: any[] = [];

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

        this.checkAnswer();
        this.clearAnswer();
    }

    checkAnswer() {
        let checkResult = {
            correctColors: 0,
            correctPlace: 0,
        };
        let that = this;
        this.answer.forEach( function(color, index) {
            if (that.colorExists(color)) {
                checkResult.correctColors++;
            }
            if ( that.placeIsCorrect(color, index)) {
                checkResult.correctPlace++;
            }
        });

        let attemptData = {
            answer: this.answer,
            checkResult: ` ${checkResult.correctColors} number of colors exist in answer
             and ${checkResult.correctPlace} number are in correct place`
        }


        this.attempts.push(attemptData);

        if (checkResult.correctPlace == 4) {
                this.WinEvent.emit("Barikallaa!!");
                console.log('tedsdasd');
        }
    }

    private colorExists(color) {
        if( this.correctAnswer.indexOf(color) >= 0) {
            return true;
        }
    }

    private placeIsCorrect(color, index) {
        return this.correctAnswer[index] == color;
    }

    private clearAnswer() {
        this.answer = ["0","0","0","0"];
    }
}
