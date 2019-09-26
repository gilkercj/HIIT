import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'timer-selector',
  templateUrl: './timer-selector.component.html',
  styleUrls: ['./timer-selector.component.css']
})
export class TimerSelectorComponent implements OnInit {


    timerControl = new FormControl('');
    typeControl = new FormControl('test');


  constructor() { }

  ngOnInit() {
    console.log("Timer selector up!")
  }



}
