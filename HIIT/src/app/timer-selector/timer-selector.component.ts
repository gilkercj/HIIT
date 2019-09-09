import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'timer-selector',
  templateUrl: './timer-selector.component.html',
  styleUrls: ['./timer-selector.component.css']
})
export class TimerSelectorComponent implements OnInit {

  timerForm = new FormGroup({
    timerControl: new FormControl(''),
    typeControl: new FormControl('test'),
  })

  constructor() { }

  ngOnInit() {
    console.log("Timer selector up!")
  }



}
