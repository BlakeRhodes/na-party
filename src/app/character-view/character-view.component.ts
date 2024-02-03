import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character, createCharacter, Type} from "../character";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-character-view',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './character-view.component.html',
  styleUrl: './character-view.component.css'
})
export class CharacterViewComponent {
  @Input() character: Character = createCharacter(Type.SCOUT);
  @Output() characterChange = new EventEmitter<Character>();
  private options: Map<Type,string[]> =  new Map([[Type.SCOUT,["bob","betty"]]]);

  changeCharacter(updatedCharacter: Character) {
    this.characterChange.emit(updatedCharacter);
  }

  displayType(): string{
    let display;
    switch (this.character.type){
      case Type.FIGHTER:
        display = "Fighter";
        break;
      case Type.HUNTER:
        display = "Hunter";
        break;
      case Type.PRIEST:
        display = "Priest"
        break;
      default:
        display = "Scout"
    }

    return display
  }

  getOptions() {
    return this.options.get(this.character.type);
  }
}
