import {Component, computed, effect} from '@angular/core';
import {StateService} from "../state.service";
import {Character} from "../character";

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {

  currentCM: number = 0;
  currentSP: number = 0;
  currentWP: number = 0;
  currentLP: number = 0;
  currentRP: number = 0;

  constructor(private state: StateService) {
    effect(() => {
      this.currentCM = this.state.cM();
      this.currentSP = this.state.sP();
      this.currentWP = this.state.wP();
      this.currentLP = this.state.lP();
      this.currentRP = this.state.rP();
    });
  }

}
