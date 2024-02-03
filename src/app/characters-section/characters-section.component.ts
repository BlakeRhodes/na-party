import { Component } from '@angular/core';
import {CharacterViewComponent} from "../character-view/character-view.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-characters-section',
  standalone: true,
  imports: [
    CharacterViewComponent,
    NgForOf
  ],
  templateUrl: './characters-section.component.html',
  styleUrl: './characters-section.component.css'
})
export class CharactersSectionComponent {
  charactersArray: string[] = ["bob","bob","bob", "bob"];

  addCharacter() {
    if (this.charactersArray.length < 6) {
      this.charactersArray.push("Bob");
    }
  }
}
