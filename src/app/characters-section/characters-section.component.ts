import {Component, effect} from '@angular/core';
import {CharacterViewComponent} from "../character-view/character-view.component";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Character, createCharacter, Type} from "../character";
import {StateService} from "../state.service";

@Component({
  selector: 'app-characters-section',
  standalone: true,
  imports: [
    CharacterViewComponent,
    NgForOf,
    FormsModule
  ],
  templateUrl: './characters-section.component.html',
  styleUrl: './characters-section.component.css'
})
export class CharactersSectionComponent {
  charactersArray: Character[] = [];
  selectedType: string = ""

  constructor(private state: StateService) {
    effect(()=>{
      this.charactersArray = []
      state.characters().forEach(character => this.charactersArray.push(character))
    });
  }

  addCharacter() {
    if (this.charactersArray.length < 6) {
      let type: Type;
      switch (this.selectedType) {
        case "Fighter":
          type = Type.FIGHTER;
          break;
        case "Hunter":
          type = Type.HUNTER;
          break;
        case "Priest":
          type = Type.PRIEST;
          break;
        case "Scout":
          type = Type.SCOUT
          break;
        default:
          return;
      }
      const newCharacter = createCharacter(type);
      this.charactersArray.push(newCharacter);
      this.state.characters.set(this.charactersArray);
      this.state.resetStats();
    }
  }
}
