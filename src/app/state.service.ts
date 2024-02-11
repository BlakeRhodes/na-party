import {computed, effect, Injectable, signal} from '@angular/core';
import {Character, createCharacter, Type} from "./character";

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() {
    effect(() => {
      localStorage.setItem("name", this.name());
      localStorage.setItem("characters", JSON.stringify(this.characters()));
      localStorage.setItem("currentHp", this.currentHp().toString());
      localStorage.setItem("rations", this.rations().toString());
      localStorage.setItem("currentSp", this.currentSp().toString());
      localStorage.setItem("currentWp", this.currentWp().toString());
      localStorage.setItem("currentLp", this.currentLp().toString());
      localStorage.setItem("currentRp", this.currentRp().toString());
      localStorage.setItem("inventory", JSON.stringify(Array.from(this.inventory())));
    });
  }


  charactersJson: Character[] = JSON.parse(localStorage.getItem("characters") || "[]");
  characters = signal(this.charactersJson.length > 0 ? this.charactersJson : [
    createCharacter(Type.FIGHTER),
    createCharacter(Type.HUNTER),
    createCharacter(Type.PRIEST),
    createCharacter(Type.SCOUT),
  ])

  inventoryJson = JSON.parse(localStorage.getItem("inventory") || "[]");
  inventory = signal(this.inventoryJson.length > 0 ? new Map(this.inventoryJson) : new Map([
    ["Gold", 12],
    ["Ale", 12],
    ["Circuitry", 0],
    ["Cloth", 0],
    ["Glass", 0],
    ["Grain", 0],
    ["Iron", 0],
    ["Plastic", 0],
    ["Reagents", 0],
    ["Salt", 0],
    ["Spices", 0],
    ["Silk", 0],
    ["Timber", 0],
  ]));

  hP = computed(() => {
    return this.characters()
      .map((character) => character.hp)
      .reduce((acc, curr) => acc + curr)
  });

  cM = computed(() => {
    return this.characters()
      .map((character) => character.cm)
      .reduce((acc, curr) => acc + curr)
  });
  sP = computed(() => {
    return this.characters()
      .map((character) => character.sp)
      .reduce((acc, curr) => acc + curr)
  });
  wP = computed(() => {
    return this.characters()
      .map((character) => character.wp)
      .reduce((acc, curr) => acc + curr)
  });
  lP = computed(() => {
    return this.characters()
      .map((character) => character.lp)
      .reduce((acc, curr) => acc + curr)
  });
  rP = computed(() => {
    return this.characters()
      .map((character) => character.rp)
      .reduce((acc, curr) => acc + curr)
  });
  pP = computed(() => {
    let fromCharacter = this.characters()
      .map((character) => character.pp)
      .reduce((acc, curr) => acc + curr)
    let extraCharacters = (this.characters().length - 4) * 5
    return fromCharacter + extraCharacters;
  });

  name = signal(localStorage.getItem("name") || "Name");
  currentHp = signal(Number(localStorage.getItem("currentHp")) || this.hP());
  rations = signal(Number(localStorage.getItem("rations")) || 6);
  currentSp = signal(Number(localStorage.getItem("currentSp")) || this.sP());
  currentWp = signal(Number(localStorage.getItem("currentWp")) || this.wP());
  currentLp = signal(Number(localStorage.getItem("currentLp")) || this.lP());
  currentRp = signal(Number(localStorage.getItem("currentRp")) || this.rP());

  updateCharacter(character: Character) {
    const updated: Character[] = [];
    this.characters().forEach(value => updated.push(value))
    const index = updated.findIndex(entry => entry.id === character.id)
    updated[index] = character
    this.characters.set(updated)
  }

  resetStats() {
    this.currentSp.set(this.sP());
    this.currentLp.set(this.lP());
    this.currentHp.set(this.hP());
    this.currentWp.set(this.wP());
    this.currentRp.set(this.rP());
  }
}
