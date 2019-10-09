import { Component, OnInit } from '@angular/core';
import { QUESTIONS } from '../assets/questions';
// import { PercentagePipe } from '@angular/p'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'driving-test';
  questions: any[] = QUESTIONS;
    selected: any;
    totalCount: number = this.questions.length;
    doneCount: number = 0;
    rightCount: number = 0;

    constructor() {}

    ngOnInit() {
    }

    select(item, question) {
        this.doneCount++;
        if (question.right === item) {
            this.rightCount++;
        }
        this.selected = item;
    };

    isActive(item) {
        return this.selected === item;
    };
}
