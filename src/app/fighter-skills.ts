import {addFive, addOne, addThree, addTwo, Character, removeFive, removeOne, removeThree, removeTwo} from "./character";
import {Pair} from "./pair";

export function applyCombatProwessOne(character:Character): Character {
  character.cm++;
  character.pp++;
  return character;
}

export function removeCombatProwessOne(character:Character): Character {
  character.cm--;
  character.pp--;
  return character;
}

export function applyCombatProwessTwo(character:Character): Character {
  character.cm += 2;
  character.pp += 2;
  return character;
}

export function removeCombatProwessTwo(character:Character): Character {
  character.cm -= 2;
  character.pp -= 2;
  return character;
}

export function applyCombatProwessThree(character:Character): Character {
  character.cm += 3;
  character.pp += 3;
  return character;
}

export function removeCombatProwessThree(character:Character): Character {
  character.cm -= 3;
  character.pp -= 3;
  return character;
}

export function applyBattleAiOne(character: Character): Character {
  character.cm += 1;
  character.pp +=2;
  return character;
}

export function removeBattleAiOne(character: Character): Character {
  character.cm -= 1;
  character.pp -=2;
  return character;
}

export function applyBattleAiTwo(character: Character): Character {
  character.cm += 2;
  character.pp += 4;
  return character;
}

export function removeBattleAiTwo(character: Character): Character {
  character.cm -= 2;
  character.pp -=4;
  return character;
}

export function applyBattleAiThree(character: Character): Character {
  character.cm += 3;
  character.pp +=6;
  return character;
}

export function removeBattleAiThree(character: Character): Character {
  character.cm -= 3;
  character.pp -=6;
  return character;
}



export const fighterSkills: Map<string, Pair<(arg: Character)=>Character, (arg: Character)=>Character>> =
  new Map([
    ["Combat Prowess [1]", {first:applyCombatProwessOne, second:removeCombatProwessOne}],
    ["Combat Prowess [2]", {first:applyCombatProwessTwo, second:removeCombatProwessTwo}],
    ["Combat Prowess [3]", {first:applyCombatProwessThree, second:removeCombatProwessThree}],
    ["Battle AI [1]", {first:applyBattleAiOne, second:removeBattleAiOne}],
    ["Battle AI [2]", {first:applyBattleAiTwo, second:removeBattleAiTwo}],
    ["Battle AI [3]", {first:applyBattleAiThree, second:removeBattleAiThree}],
    ["E-Shield", {first:addTwo, second:removeTwo}],
    ["Aetherblade", {first:addTwo, second:removeTwo}],
    ["Spire Lance", {first:addTwo, second:removeTwo}],
    ["Pneumatic Clawed Gauntlets", {first:addTwo, second:removeTwo}],
    ["Lead Belcher",{first:addThree, second:removeThree}],
    ["Heavy Armor", {first:addFive, second: removeFive}],
    ["Battle Cry",{first:addOne, second: removeOne}],
  ]);
