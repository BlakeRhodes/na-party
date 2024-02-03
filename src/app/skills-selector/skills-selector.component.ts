import {Component, Input} from '@angular/core';
import {Character, createCharacter, Type} from "../character";
import {NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";
import {fighterSkills} from "../fighter-skills";
import {FormsModule} from "@angular/forms";
import {StateService} from "../state.service";
import {hunterSkills} from "../hunter-skills";
import {priestSkills} from "../priest-skills";
import {scoutSkills} from "../scout-skills";

@Component({
  selector: 'app-skills-selector',
  standalone: true,
  imports: [
    NgSwitch,
    NgSwitchCase,
    FormsModule,
    NgForOf,
    NgSwitchDefault,
    NgIf
  ],
  templateUrl: './skills-selector.component.html',
  styleUrl: './skills-selector.component.css'
})
export class SkillsSelectorComponent {
  @Input() character: Character = createCharacter(Type.FIGHTER);
  type = this.character.type
  FIGHTER = Type.FIGHTER;
  HUNTER = Type.HUNTER;
  PRIEST = Type.PRIEST;
  SCOUT = Type.SCOUT;

  fighterSkills = fighterSkills;
  fighterSkillNames: string[] = [];
  fighterChosen: boolean[] = [];

  hunterSkills = hunterSkills;
  hunterSkillNames: string[] = [];
  hunterChosen: boolean[] = [];

  priestSkills = priestSkills;
  priestSkillNames: string[] = [];
  priestChosen: boolean[] = [];

  scoutSkills = scoutSkills;
  scoutSkillNames: string[] = [];
  scoutChosen: boolean[] = [];
  isExpanded: boolean = false;

  constructor(private state: StateService) {
    this.fighterSkills.forEach((value, key) => {
      this.fighterSkillNames.push(key);
    });

    this.hunterSkills.forEach((value, key) => {
      this.hunterSkillNames.push(key);
    });

    this.priestSkills.forEach((value, key) => {
      this.priestSkillNames.push(key);
    });

    this.scoutSkills.forEach((value, key) => {
      this.scoutSkillNames.push(key);
    });
  }

  updateFighter(skill: string, i: number, $event: any) {
    console.log(skill, this.fighterChosen[i], $event, this.character)
    const skillPair = this.fighterSkills.get(skill);
    if (skillPair) {
      if(this.fighterChosen[i]){
        this.character = skillPair.first(this.character);
      } else {
        this.character = skillPair.second(this.character);
      }
      this.state.updateCharacter(this.character)
    }
  }

  updateHunter(skill: string, i: number, $event: any) {
    console.log(skill, this.hunterChosen[i], $event, this.character)
    const skillPair = this.hunterSkills.get(skill);
    if (skillPair) {
      if(this.hunterChosen[i]){
        this.character = skillPair.first(this.character);
      } else {
        this.character = skillPair.second(this.character);
      }
      this.state.updateCharacter(this.character)
    }
  }

  updatePriest(skill: string, i: number, $event: any) {
    console.log(skill, this.priestChosen[i], $event, this.character)
    const skillPair = this.priestSkills.get(skill);
    if (skillPair) {
      if(this.priestChosen[i]){
        this.character = skillPair.first(this.character);
      } else {
        this.character = skillPair.second(this.character);
      }
      this.state.updateCharacter(this.character)
    }
  }


  updateScout(skill: string, i: number, $event: any) {
    console.log(skill, this.scoutChosen[i], $event, this.character)
    const skillPair = this.scoutSkills.get(skill);
    if (skillPair) {
      if(this.scoutChosen[i]){
        this.character = skillPair.first(this.character);
      } else {
        this.character = skillPair.second(this.character);
      }
      this.state.updateCharacter(this.character)
    }
  }
}
