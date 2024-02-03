import {Component, Input} from '@angular/core';
import {Type} from "../character";
import {NgSwitch, NgSwitchCase} from "@angular/common";

@Component({
  selector: 'app-skills-selector',
  standalone: true,
  imports: [
    NgSwitch,
    NgSwitchCase
  ],
  templateUrl: './skills-selector.component.html',
  styleUrl: './skills-selector.component.css'
})
export class SkillsSelectorComponent {
  @Input() type!: Type;
  FIGHTER = Type.FIGHTER;
  HUNTER = Type.HUNTER;
  PRIEST = Type.PRIEST;
  SCOUT = Type.SCOUT;
}
