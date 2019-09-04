import { Component, OnInit } from '@angular/core';

import { Timer } from "./timer";

@Component({
  selector: 'timer-card',
  templateUrl: './timer-card.component.html',
  styleUrls: ['./timer-card.component.css']
})
export class TimerCardComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }

  timers = [
    new Timer(1, 24, "run"),
    new Timer(2, 66, "walk"),
    new Timer(3, 69, "rest")
  ]
}
