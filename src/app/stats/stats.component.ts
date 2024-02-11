import {Component, effect} from '@angular/core';
import {StateService} from "../state.service";

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

  maxCM: number = 0;
  maxSP: number = 0;
  maxWP: number = 0;
  maxLP: number = 0;
  maxRP: number = 0;

  constructor(private state: StateService) {
    effect(() => {
      this.maxCM = this.state.cM();
      this.maxSP = this.state.sP();
      this.maxWP = this.state.wP();
      this.maxLP = this.state.lP();
      this.maxRP = this.state.rP();

      this.currentCM = this.maxCM;
      this.currentSP = this.state.currentSp();
      this.currentWP = this.state.currentWp();
      this.currentLP = this.state.currentLp();
      this.currentRP = this.state.currentRp();
    });
  }

  updateStat(statName: string, value: number) {
    switch (statName) {
      case "SP":
        if (this.currentSP + value <= this.maxSP && this.currentSP + value >= 0) {
          this.state.currentSp.set(this.currentSP + value);
        }
        break;

      case "WP":
        if (this.currentWP + value <= this.maxWP && this.currentWP + value >= 0) {
          this.state.currentWp.set(this.currentWP + value);
        }
        break;

      case "LP":
        if (this.currentLP + value <= this.maxLP && this.currentLP + value >= 0) {
          this.state.currentLp.set(this.currentLP + value);
        }
        break;

      case "RP":
        if (this.currentRP + value <= this.maxRP && this.currentRP + value >= 0) {
          this.state.currentRp.set(this.currentRP + value);
        }
        break;

      default:
        return;
    }
  }
}
