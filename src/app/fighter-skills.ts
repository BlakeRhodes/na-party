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
    ["Combat Stimms [1]", {first:applyCombatProwessOne, second:removeCombatProwessOne}],
    ["Combat Stimms [2]", {first:applyCombatProwessTwo, second:removeCombatProwessTwo}],
    ["Combat Stimms [3]", {first:applyCombatProwessThree, second:removeCombatProwessThree}],
    ["Battle AI [1]", {first:applyBattleAiOne, second:removeBattleAiOne}],
    ["Battle AI [2]", {first:applyBattleAiTwo, second:removeBattleAiTwo}],
    ["Battle AI [3]", {first:applyBattleAiThree, second:removeBattleAiThree}],
    ["E-Shield", {first:addTwo, second:removeTwo}],
    ["Aetherblade", {first:addTwo, second:removeTwo}],
    ["Spire Lance", {first:addTwo, second:removeTwo}],
    ["P. C. Gauntlets", {first:addTwo, second:removeTwo}],
    ["Lead Belcher",{first:addThree, second:removeThree}],
    ["Heavy Armor", {first:addFive, second: removeFive}],
    ["Battle Cry",{first:addOne, second: removeOne}],
  ]);

export const fighterSkillDescriptions = new Map([
  ["Combat Stimms [1]", "Add 1 to your combat modifier."],
  ["Combat Stimms [2]", "Add 2 to your combat modifier."],
  ["Combat Stimms [3]", "Add 3 to your combat modifier."],
  ["Battle AI [1]", "Add 1 to your combat modifier."],
  ["Battle AI [2]", "Add 2 to your combat modifier."],
  ["Battle AI [3]", "Add 3 to your combat modifier."],
  ["E-Shield", "When the party takes damage ignore 2 point of damage"],
  ["Aetherblade", "When your party inflicts damage on an enemy, add 2 to the damage."],
  ["Spire Lance", "Add the number of other characters with Spire Lance in the party to your combat modifier."],
  ["Lead Belcher", "When your party inflicts damage, they gain the edge. If they already have the edge, deal 3 additional damage."],
  ["Heavy Armor", "When the party takes combat damage ignore 3 point of damage"],
  ["Battle Cry", "When making a combat roll, you may spend 1 RP to add 1 to the roll. This can be done after the roll is made."],
  ["P. C. Gauntlets", "When your party inflicts damage on an enemy, add 3 to the damage."]
]);
