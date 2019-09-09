
//Angular Dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

//Angular Material Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

//Components
import { AppComponent } from './app.component';
import { TimerCardComponent } from './timer-card/timer-card.component';
import { TimerSelectorComponent } from './timer-selector/timer-selector.component';
import { TimerAdderComponent } from './timer-adder/timer-adder.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerCardComponent,
    TimerSelectorComponent,
    TimerAdderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    MatButtonModule, 
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
