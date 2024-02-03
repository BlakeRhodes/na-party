import {Component, EventEmitter, Input, Output} from '@angular/core';
import {StatsComponent} from "../../stats/stats.component";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-party-header',
  standalone: true,
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './party-header.component.html',
  styleUrl: './party-header.component.css'
})
export class PartyHeaderComponent {

  isEditMode: boolean = false;
  partyName: string = "Name";
  currentHP: number = 0;
  maxHp: number = 5;
  powerPoints: number = 40;

  updateHp(number: number) {
    const newValue = this.currentHP + number
    if(newValue <= this.maxHp && newValue >=0)
      this.currentHP = newValue
  }
}
