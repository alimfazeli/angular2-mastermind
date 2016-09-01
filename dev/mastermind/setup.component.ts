import {Component, EventEmitter, Input, Output} from 'angular2/core';

@Component({
  selector: 'game-setup',
  templateUrl: '/templates/mastermind/setup.html',
  inputs: ['name:username']
})

export class SetupComponent {
  name: string;
  @Output() onUpdate = new EventEmitter();

  settingUpdate() {
      this.onUpdate.emit(this.name);
  }
}
