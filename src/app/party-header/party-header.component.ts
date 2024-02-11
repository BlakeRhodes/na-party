import {Component, effect} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {StateService} from "../state.service";

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
  partyName: string = "";
  currentHP: number = 0;
  maxHp: number = 5;
  currentPP: number = 0;
  maxRations: number = 6
  currentRations: number = 0;

  constructor(private state: StateService) {
    effect(() => {
      this.partyName = this.state.name()
      this.maxHp = this.state.hP();
      this.currentHP = this.state.currentHp();
      this.currentPP = this.state.pP();
      this.currentRations = this.state.rations()
    });
  }

  updateHp(number: number) {
    const newValue = this.currentHP + number;
    if(newValue <= this.maxHp && newValue >=0)
      this.state.currentHp.set(newValue)
  }
  updateRations(number: number){
    const newValue = this.currentRations + number;
    if(newValue <= this.maxRations && newValue >= 0)
      this.state.rations.set(newValue);
  }

  updateName() {
    this.state.name.set(this.partyName);
  }
}
