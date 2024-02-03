import {computed, Injectable, signal, Signal} from '@angular/core';
import {Character, createCharacter, Type} from "./character";
import {SIGNAL} from "@angular/core/primitives/signals";

@Injectable({
  providedIn: 'root'
})
export class StateService {

  characters = signal([
    createCharacter(Type.FIGHTER),
    createCharacter(Type.HUNTER),
    createCharacter(Type.PRIEST),
    createCharacter(Type.SCOUT),
  ]);

  hP = computed(()=>{
    return this.characters()
      .map((character) => character.hp)
      .reduce((acc, curr) => acc + curr)
  });
  cM = computed(()=>{
    return this.characters()
      .map((character) => character.cm)
      .reduce((acc, curr) => acc + curr)
  });
  sP = computed(()=>{
    return this.characters()
      .map((character) => character.sp)
      .reduce((acc, curr) => acc + curr)
  });
  wP = computed(()=>{
    return this.characters()
      .map((character) => character.wp)
      .reduce((acc, curr) => acc + curr)
  });
  lP = computed(()=>{
    return this.characters()
      .map((character) => character.lp)
      .reduce((acc, curr) => acc + curr)
  });
  rP = computed(()=>{
    return this.characters()
      .map((character) => character.rp)
      .reduce((acc, curr) => acc + curr)
  });

  pP = computed(()=>{
    let fromCharacter = this.characters()
      .map((character) => character.pp)
      .reduce((acc, curr) => acc + curr)
    let extraCharacters = (this.characters().length - 4) * 5
    return fromCharacter + extraCharacters;
  });

  updateCharacter(character: Character) {
    console.log(this.characters())
    const updated: Character[] = [];
    this.characters().forEach(value => updated.push(value))
    const index = updated.findIndex(entry => entry.id === character.id)
    updated[index]=character
    this.characters.set(updated)
    console.log(this.characters())
  }
}
