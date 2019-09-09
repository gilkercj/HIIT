import { Component, OnInit } from '@angular/core';

import { Timer } from '../timer'

import { DataService } from '../data.service';

@Component({
  selector: 'timer-card',
  templateUrl: './timer-card.component.html',
  styleUrls: ['./timer-card.component.css']
})
export class TimerCardComponent implements OnInit {



  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log("Timer cards up!")
  }

  // getData(): void {
  //   this.timer = this.dataService
  // }

  timers = [
    new Timer(1, 24, "run"),
    new Timer(2, 66, "walk"),
    new Timer(3, 69, "rest")
  ]

}
