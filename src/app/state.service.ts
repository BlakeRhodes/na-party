import {computed, Injectable, signal, Signal} from '@angular/core';
import {Character, createCharacter, Type} from "./character";
import {SIGNAL} from "@angular/core/primitives/signals";

@Injectable({
  providedIn: 'root'
})
export class StateService {

  name = signal("Name")
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

  currentHp = signal(this.hP());
  rations = signal(6);
  currentSp = signal(this.sP());
  currentWp = signal(this.wP());
  currentLp = signal(this.lP());
  currentRp = signal(this.rP());
  inventory = signal(new Map([
    [ "Gold",  12],
    [ "Ale",  12],
    [ "Circuitry",  0],
    [ "Cloth",  0],
    [ "Glass",  0],
    [ "Grain",  0],
    [ "Iron",  0],
    [ "Plastic",  0],
    [ "Reagents",  0],
    [ "Salt",  0],
    [ "Spices",  0],
    [ "Silk",  0],
    [ "Timber",  0],
  ]));

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
