export enum Type {
  FIGHTER,
  HUNTER,
  PRIEST,
  SCOUT,
}

export interface Character {
  type: Type;
  cm: number;
  hp: number;
  sp: number;
  wp: number;
  lp: number;
  rp: number;
  pp: number;
}

export const fighter: Character = {
  type: Type.FIGHTER,
  cm: 2,
  hp: 3,
  sp: 1,
  wp: 0,
  lp: 1,
  rp: 0,
  pp: 0
}

export const hunter: Character = {
  type: Type.HUNTER,
  cm: 0,
  hp: 2,
  sp: 1,
  wp: 1,
  lp: 1,
  rp: 2,
  pp: 0
}

export const priest: Character = {
  type: Type.PRIEST,
  cm: 0,
  hp: 2,
  sp: 0,
  wp: 3,
  lp: 1,
  rp: 1,
  pp: 0
}

export const scout: Character = {
  type: Type.SCOUT,
  cm: 0,
  hp: 3,
  sp: 2,
  wp: 0,
  lp: 1,
  rp: 1,
  pp: 0
}

export function createCharacter(type: Type): Character {
  let char: Character
  switch (type) {
    case Type.FIGHTER:
      char = fighter;
      break;
    case Type.HUNTER:
      char = hunter;
      break;
    case Type.PRIEST:
      char = priest;
      break;
    default:
      char = scout;
  }

  return char;
}
