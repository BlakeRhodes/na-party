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
  partyName: string = "Name";
  currentHP: number = 0;
  maxHp: number = 5;
  currentPP: number = 0;

  constructor(private state: StateService) {
    effect(() => {
      this.maxHp = this.state.hP();
      this.currentHP = this.maxHp;
      this.currentPP = this.state.pP();
    });
  }

  updateHp(number: number) {
    const newValue = this.currentHP + number
    if(newValue <= this.maxHp && newValue >=0)
      this.currentHP = newValue
  }
}
