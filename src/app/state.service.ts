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

  cM = computed(()=>{
    console.log("WTF")
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


}
