import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2 class="text-success">Welcome {{ name }}</h2>
    <h2 [class]="successClass">Aloha</h2>
    <input type="text" value="aakash" />
    <input [disabled]="isDisabled" [id]="myId" type="text" value="000" />
    <input bind-disabled="isDisabled" [id]="myId" type="text" value="000" />
    <h2 [class.text-danger]="hasDanger">Learning Binding</h2>
    <h2 [ngClass]="messageClasses">Testing</h2>`,

  styles: [
    `
      .text-success {
        color: green;
      }
      .text-danger {
        color: red;
      }
      .text-flex {
        font-style: bold;
      }
    `,
  ],
})
export class TestComponent implements OnInit {
  public name = 'aakash';
  public myId = 'testId';
  public isDisabled = false;
  public siteUrl = window.location.href;
  public successClass = 'text-danger';
  public hasDanger = true;
  public isSpecial = true;
  public messageClasses = {
    'text-success': !this.hasDanger,
    'text-danger': this.hasDanger,
    'text-special': this.isSpecial,
  };

  constructor() {}

  ngOnInit(): void {}

  greetUser() {
    return 'Hello ' + this.name;
  }
}
