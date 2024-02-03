import { v4 as uuidv4 } from 'uuid';

export enum Type {
  FIGHTER,
  HUNTER,
  PRIEST,
  SCOUT,
}

export interface Character {
  type: Type;
  id: string;
  cm: number;
  hp: number;
  sp: number;
  wp: number;
  lp: number;
  rp: number;
  pp: number;
  skills: string[]
}

export function createCharacter(type: Type): Character {
  switch (type) {
    case Type.FIGHTER:
      return {
        type: Type.FIGHTER,
        id: uuidv4(),
        cm: 2,
        hp: 3,
        sp: 1,
        wp: 0,
        lp: 1,
        rp: 0,
        pp: 0,
        skills: []
      };
    case Type.HUNTER:
      return {
        type: Type.HUNTER,
        id: uuidv4(),
        cm: 0,
        hp: 2,
        sp: 1,
        wp: 1,
        lp: 1,
        rp: 2,
        pp: 0,
        skills: []
      };
    case Type.PRIEST:
      return {
        type: Type.PRIEST,
        id: uuidv4(),
        cm: 0,
        hp: 2,
        sp: 0,
        wp: 3,
        lp: 1,
        rp: 1,
        pp: 0,
        skills: []
      };
    default:
      return {
        type: Type.SCOUT,
        id: uuidv4(),
        cm: 0,
        hp: 3,
        sp: 2,
        wp: 0,
        lp: 1,
        rp: 1,
        pp: 0,
        skills: []
      };
  }
}

export function addTwo(character: Character): Character {
  character.pp += 2;
  return character;
}

export function removeTwo(character: Character): Character {
  character.pp -= 2;
  return character;
}
export function addOne(character: Character): Character {
  character.pp += 1;
  return character;
}

export function removeOne(character: Character): Character {
  character.pp -= 1;
  return character;
}

export function addThree(character: Character): Character {
  character.pp += 3;
  return character;
}

export function removeThree(character: Character): Character {
  character.pp -= 3;
  return character;
}

export function addFour(character: Character): Character {
  character.pp += 4;
  return character;
}

export function removeFour(character: Character): Character {
  character.pp -= 4;
  return character;
}

export function addFive(character: Character): Character {
  character.pp += 5;
  return character;
}

export function removeFive(character: Character): Character {
  character.pp -= 5;
  return character;
}

export function addSix(character: Character): Character {
  character.pp += 6;
  return character;
}

export function removeSix(character: Character): Character{
  character.pp -= 6;
  return character;
}
